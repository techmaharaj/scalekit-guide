---
description: Step-by-step guide to implement Single Sign-on in your application using Scalekit's APIs
---

import InstallSDK from './../templates/install-sdk.md';

# Quickstart

## Overview

This quickstart guide will show you how to implement Single Sign-on (SSO). Scalekit is an authentication middleware between your application and Identity Providers over the OpenID Connect (OIDC) and Security Assertion Markup Language (SAML) protocols.

<figure>![How Scalekit works](assets/how-scalekit-connects.png)
<figcaption>Scalekit in a nutshell</figcaption></figure>

## Sequence of Authentication

Scalekit springs into action when the user logs into your app. It lets your app authenticate with the IdPs of choice and lets your customers configure by getting their own admin portal.

Visualize the authentication flow with this high-level diagram:

<figure>![Sequence Diagram for SSO Workflow](assets/how-sso-works.png)
<figcaption>How Scalekit integrates with your SSO flow</figcaption></figure>

1. User triggers SSO by logging into your app
   1. When a user attempts to log in, your app recognizes the need for SSO.
2. Your app redirects to Scalekit with the user identifier
   1. Your app sends the user to Scalekit's Authorization URL.
   2. It includes a unique identifier like the user's email or organization ID. 4. Your app also provides a Redirect URI for Scalekit to use later.
3. Scalekit identifies the user's SSO provider 5. Using the provided user details, Scalekit determines the correct SSO setup. 6. It then redirects the user to their organization's identity provider (IdP).
4. IdP authenticates the user 7. The user's IdP takes over, authenticating them via SAML or OIDC protocols. 8. These are industry-standard protocols for secure, seamless authentication.
5. IdP sends user profile to Scalekit 9. After successful authentication, the IdP shares user profile details with Scalekit.
6. Scalekit redirects user back to your app 10. Scalekit sends the user to the Redirect URI you provided earlier. 11. It includes a one-time code in this redirection.
7. Your app exchanges code for user details 12. Your app sends the one-time code and your API credentials to Scalekit. 13. In return, Scalekit provides the user details it received from the IdP.
8. Your app logs in the user 14. Using the user details from Scalekit, your app creates a session. 15. The user is now logged in and can access your app's resources.

## Implement Single Sign-on

### 0. Before getting started

- Ensure you're logged into your [Scalekit account](https://app.scalekit.com) and have your API credentials ready
- Access to your codebase is also necessary to implement and test changes

### 1. Install SDK

Scalekit provides SDKs for various languages to quickly add SSO in your application.

Install the relevant SDK using the command below:

<InstallSDK />

### 2. Configure your Secrets

Set up your API credentials, found on your Scalekit dashboard, as environment variables for secure API communication.

**API Credentials:**

- **Environment URL**: this is the base url of the environment to which all your API calls are made to. This URL is unique to an environment, so that you can route the API requests to the appropriate environment.
- **Client ID**: A unique, alpha-numeric string that your application will use for all communications with Scalekit.
- **Client Secret**: Randomly generated secret that is used to authenticate your APIs. For security purposes, this is generated only when you request using the Scalekit Dashboard. See [here](/docs/best-practices/manage-client-secrets.md) to learn best practices on how to manage Client Secret.

Now, go to your Scalekit Dashboard, choose the "Development" environment and select “API Config” to access these configuration details.

We recommend you to store these credentials as environment variables (in your .env file).

```jsx title=".env"
SCALEKIT_ENVIRONMENT_URL = '<https://yoursaas-dev.scalekit.com>';
SCALEKIT_CLIENT_ID = 'skc_122056050118122349527';
SCALEKIT_CLIENT_SECRET =
  'test_CbGfKxzwUVO6ISirRcTKMbcX3dsfdsfdsfsdfdsfsdfGmXLN';
```

### 3. Initiate the Authorization URL

The endpoint to initiate SSO is crucial for the authentication workflow. The SSO integration starts after you redirect the user to Scalekit Authorization URL.

As part of Authorization URL, you will need to send the following required parameters for successfully initiating SSO. You can read more details about the entire list of parameters that are accepted as part of authoriation url <a href="/best-practices/authorization-url" target="_blank">here</a>

1. **Redirect URI:** A redirect URI is the endpoint in your application that Scalekit redirects the user to after they have completed the authentication with their Identity Provider.

After a successful user authentication, Scalekit provides a temporary code value to the redirect_uri you configured. You'll need to POST this code back to Scalekit with your client secret in order to retrieve user details.

2. **SSO Connection Identifier:** One of the following request parameters should be present to identify the appropriate SSO connection to be used to initiate the SSO.

- **<SimpleCode>organization_id</SimpleCode>**: Organization ID that the user belongs to. This is the preferred parameter for SAML and OIDC connections. Example: <SimpleCode>org_12434341</SimpleCode>

- **<SimpleCode>connection_id</SimpleCode>**: You can also use the Connection ID for the specific SSO connection. Example: <SimpleCode>conn_121414141</SimpleCode>

- **<SimpleCode>domain</SimpleCode>**: If your application enforces SSO for all users that belong to a particular email domain, this attribute can be useful to detect the appropriate SSO connection. Example: <SimpleCode>google.com or yourcustomerdomain.com</SimpleCode>

3. **client_id:** Client ID uniquely identifies your application and environment and hence it is mandatory.

:::tip
our SDK automatically fills in the required parameters while constructing the authorizationURL as shown below.
:::
<Tabs groupId="tech-stack">
<TabItem value="nodejs" label="Node.js">

```javascript showLineNumbers
// init client
const scalekit = new Scalekit(
  SCALEKIT_ENVIRONMENT_URL,
  SCALEKIT_CLIENT_ID,
  SCALEKIT_CLIENT_SECRET
);

// Authorization URL with organization ID parameter and optional state parameter
const authorizationURL = scalekit.getAuthorizationUrl(redirectUri, {
  organizationId: 'org_12442',
  state: state,
});

// Authorization URL with optional login hint parameter
const authorizationURL = scalekit.getAuthorizationUrl(redirectUri, {
  loginHint: 'user@example.com',
  organizationId: 'org_12442',
});

// Authorization URL with connection ID parameter
const authorizationURL = scalekit.getAuthorizationUrl(redirectUri, {
  connectionId: 'conn_1242242',
});

// next step is to redirect the user to this authorizationURL
```

</TabItem>
<!-- <TabItem value="py" label="Python">

```python
# write python code here
```

</TabItem>
<TabItem value="golang" label="Go">

```go
// write go code here
```

</TabItem> -->
</Tabs>

### 4. Fetch User Details

After Scalekit completes SSO authentication, it sends a unique authorization code to the redirect_uri that is sent as part of the authorization URL above. You will need to send this `code` and `redirect_uri` to get the authenticated user's profile information.

<Tabs groupId="tech-stack">
<TabItem value="nodejs" label="Node.js">

```javascript showLineNumbers
const {
  code,
  error,
  error_description,
  idp_initiated_login,
  connection_id,
  relay_state,
} = req.query;

if (error) {
  // handle errors
}

// check if this is an idp initiated login
if (idp_initiated_login && idp_initiated_login === 'success') {
  // handle idp initiated login
  const authorizationURL = scalekit.getAuthorizationUrl(redirectUri, {
    connectionId: connection_id,
    ...(relay_state && { state: relay_state }), // optionally pass relay state as state parameter
  });

  // next step is to redirect the user to this authorizationURL
}

// if there are no errors and if this is not an IdP initiated SSO, then authenticate with the code
const res = await sc.authenticateWithCode({
  code: code,
  redirectUri: redirectUri,
});

// res.user has the authenticated user's details
const userEmail = res.user.email;

// next step is to create a session for this user and allow access to your application resources
```

</TabItem>
<!-- <TabItem value="py" label="Python">

<CodeBlock language="python">
 {`# write python code here`}
</CodeBlock>

</TabItem>
<TabItem value="golang" label="Go">

```go
// write go code here
```

</TabItem> -->
</Tabs>

## Onboarding Enterprise Customers

Once SSO is implemented, you’ll want to thoroughly test the setup and go through a production checklist to ensure your application is secure and ready for enterprise use.

- [Test SSO](/docs/single-sign-on/testing-sso.md)
- [Production Check-list](/docs/single-sign-on/golive-checklist.md)

Explore more. Check out:

- [Node.js SDK](https://github.com/scalekit-inc/scalekit-sdk-node) - Reference the SDK used in this guide for a deep dive into its capabilities
- [Sample Next JS App](https://github.com/scalekit-inc/scalekit-nextjs-example) - Download and explore a fully functional sample app to jumpstart your implementation

Now that you have a working SSO integration with Scalekit, you're ready to provide a seamless authentication experience for your users. Happy coding!

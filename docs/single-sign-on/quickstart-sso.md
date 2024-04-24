---
sidebar_position: 1
slug: /
---
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# Quick Start

## What you will learn

In this follow-along quick start guide, you will learn how to

- successfully integrate your system with Scalekit using our NodeJS SDK
- test end-end integration for a test organization in your dev environment
- get ready to kick start your go-live journey.

:::tip

Quick Tip: You can copy the code samples given in the doc to get started quickly!

:::

## Prerequisites

Before you get started, make sure 

- You have access to your [Scalekit account](https://app.scalekit.com). 
- You have local access to your codebase to make changes and deploy in a test environment

## Integrate with Scalekit

Scalekit allows your users to authenticate with any of their Enterprise Identity Provider either via SAML or OIDC without you having to lift your finger. This quick start guide helps you to integrate with Scalekit easily so that you can enable Enterprise Authentication capabilities to your customers. 

At a high level, the Single Sign-on workflow between your product and Scalekit can be described as below:

<figure>![Single Sign-on workflow between your product and Scalekit](/img/how_sso_works.png)
<figcaption>Single Sign-on workflow between your product and Scalekit</figcaption></figure>

### Configure your environment

To securely exchange user information via Scalekit, you need to configure your environment so that Scalekit platform knows how to communicate with your product securely. 

To make your integration, testing and deployment experience easier - we have created a development environment for you as part of your account creation and also have setup the bare minimum needed for you to get started immediately. 

:::info

Environments:  We have created Development and Production Environments in your Scalekit Dashboard to keep your configuration, customization and customer data completely isolated from each other so that you can integrate, test and go-live to production with complete confidence.

:::


To make successful API calls with Scalekit, you need 

- **Environment URL**: this is the base url of the environment to which all your API calls are made to. This changes from environment to environment so that you can route the API requests to the appropriate environment. 
- **Client ID**: This is a unique, alpha-numeric string that your application will use for all communications with Scalekit to uniquely identify you.
- **Client Secret**: A long, random cryptographically generated secret that is used to authenticate your APIs. For security purposes, this is generated only when you request using the Scalekit Dashboard. For all practical purposes, we treat Client Secret as a password for your application. And you should too. 

Head-on over to your Scalekit Dashboard, choose "Development" Environment and click on API Config to access these configuration details. We recommend storing these values as environment variables for ease of replacement and use. We have done the same for all code samples shown below.

```javascript title=".env"
SCALEKIT_ENVIRONMENT_URL="https://yoursaas-dev.scalekit.com"
SCALEKIT_CLIENT_ID="skc_12205605011849527"
SCALEKIT_CLIENT_SECRET="test_CbGfKxzfIipiY7RHuDkchgLdwUVO6ISirRcTKMbcX3dsfdsfdsfsdfdsfsdfGmXLN"
```

#### Redirect URLs

A redirect URL is the URL endpoint in your application that Scalekit redirects the user to after they have completed the authentication with their Identity Provider. 

After a successful user authentication, Scalekit provides a temporary code value to the redirect_url you configured. You'll need to POST this code back to Scalekit with your client secret in exchange for the actual user information details. 

#### Install Scalekit SDK

To make Scalekit integration easier, you can install our SDK by running the below command in your terminal. 

<Tabs groupId="tech-stack">
<TabItem value="nodejs" label="NodeJS">


```shell
$ npm install @scalekit-inc/nodejs-sdk
```

</TabItem>
<TabItem value="py" label="Python">

```shell
$ pip install scalekit
```

</TabItem>
<TabItem value="golang" label="Go">

```go
import "scalekit-inc/go-sdk"
```

</TabItem>
</Tabs>


To use the Scalekit SDK in your application code, you can create the client using the following code and use the client to invoke appropriate API calls.


<Tabs groupId="tech-stack">
<TabItem value="nodejs" label="NodeJS">

```javascript
const scalekit = new Scalekit(SCALEKIT_ENVIRONMENT_URL, SCALEKIT_CLIENT_ID, SCALEKIT_CLIENT_SECRET);
```

</TabItem>
<TabItem value="py" label="Python">

```python
# write python code here
```

</TabItem>
<TabItem value="golang" label="Go">

```go
// write go code here
```

</TabItem>
</Tabs>



### Initiate SSO login

When a user intends to login with SSO from your login page, you need to send the request to Scalekit so that we can complete the user authentication process via Single Sign-on with their Identity Provider. This process will start from you redirecting the user to Scalekit Authorization URL. 

As part of the Authorization URL, you would need to send one of the below required information to Scalekit so that we can process the request and authorize the user via their configured Identity Provider. 

- `organization_id`: Unique Organization ID that the user belongs to. Scalekit will identify the SSO Connections configured for this organization and will choose the first active SSO connection. Example: `org_12434341`
- `connection_id`: Unique Connection ID of the specific SSO connection. Example: `conn_121414141`
- `domain`:  If you have configured that your application will enforce Single Sign-on for all users from a single email domain, this attribute is used to detect the appropriate SSO connection. Example: `google.com` or `yourcustomerdomain.com`


<Tabs groupId="tech-stack">
<TabItem value="nodejs" label="NodeJS">

```javascript showLineNumbers
const authorizationURL = scalekit.getAuthorizationUrl(redirectUri, {
        loginHint: "user@example.com",
  			//connectionId: "conn_1223231234124",
  			//domain: "example.com",
        organizationId: "org_123235245"
      })
```

</TabItem>
<TabItem value="py" label="Python">

```python
# write python code here
```

</TabItem>
<TabItem value="golang" label="Go">

```go
// write go code here
```

</TabItem>
</Tabs>


### Get user info as part of Redirect URI

After the user has successfully authenticated with their Identity Provider, Scalekit sends a unique authorization `code` to the redirect_uri that is sent as part of the authorization URL above. You will need to send this `code` and your `client_secret` to get the authenticated user's profile information.

<Tabs groupId="tech-stack">
<TabItem value="nodejs" label="NodeJS">

```javascript showLineNumbers
const {code} = req.query;

// handle errors, if any

const res = await sc.authenticateWithCode({
        code: code,
        redirectUri: redirectUri
      });

// res.user has the authenticated user's details 
// const user_email = res.user.email;


// create a session for this user and redirect the user to your application.
```

</TabItem>
<TabItem value="py" label="Python">

```python
# write python code here
```

</TabItem>
<TabItem value="golang" label="Go">

```go
// write go code here
```

</TabItem>
</Tabs>



## Next Steps

Excellent! By now, you should have successfully integrated Scalekit in your application to let your users authenticate via their Enterprise Identity Provider.

But, this is not all. You can do so much more with Scalekit. To learn more about what you can do with Scalekit, check out:


- [Sample Apps](https://www.github.com/scalekit-inc/) - You can download our fully functional sample app to download the code used in this guide and setup a running application quickly.
- [Production Checklist](golive-checklist.md) - Go through the production check list we have put together to ensure a secure and successful production release.

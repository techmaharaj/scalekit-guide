---
excerpt: "This article describes how to integrate Scalekit with your Auth0 implementation"
metadata:
  description: "This document provides a guide on integrating Scalekit with Auth0 applications for seamless Single Sign-on Authentication. It includes steps on configuring Scalekit as an OpenID Connect provider in your Auth0 tenant."
pagination_next: null
pagination_prev: null
---

# Auth0

<Subtitle>Learn how to integrate Scalekit with Auth0 via OpenID Connect (OIDC)</Subtitle>

### Introduction

This guide is designed to provide you a walkthrough of integrating Scalekit with Auth0, thereby facilitating seamless Single Sign-on (SSO) authentication for your application's users. We demonstrate how to configure Scalekit so that Auth0 can allow some of your enterprise users to login via Scalekit and still continue to act as the identity management solution for your users and manage the login, session management functionality.

To begin, here is an overview of the SSO workflow.

<figure>![Scalekit - Auth0 Integration](../assets/integrations/auth0/0.png)
<figcaption>Scalekit - Auth0 Integration</figcaption></figure>

Scalekit is designed as a fully compatible OpenID Connect (OIDC) provider, thus streamlining the integration. As Auth0 continues to act as your identity management system, you'll be able to seamlessly integrate Single Sign-On into your application without having to write code.

## Before getting started

**Note** that Auth0 classifies OpenID Connect as Enterprise Connection and this feature is available only in the paid plans of Auth0. Please check whether your current plan has access to creating Enterprise Connections with OpenID Connect providers.

Ensure you have:

- access to Auth0's Authenticate dashboard. You need to have a role as an 'Admin' or 'Editor - Connections' to create and edit OIDC connections on Auth0.
- access to your Scalekit dashboard.

## Integrate Scalekit with Auth0

### 1. Add Scalekit as OIDC connection

:::info Note
Because of an [existing issue](https://community.auth0.com/t/creating-an-oidc-connection-fails-with-options-issuer-is-required-error/128189) in adding OIDC connections via Auth0 Management Console, you need to use Auth0 API to create OIDC connection.
:::

Use [Auth0 Connections API](https://auth0.com/docs/api/management/v2/connections/post-connections) to create Scalekit as a OpenID connection for your tenant. Sample curl command below:

```bash showLineNumbers

curl --request POST \
  --url 'https://<AUTH0_TENANT_DOMAIN>.us.auth0.com/api/v2/connections' \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  --header 'authorization: Bearer <API_TOKEN>' \
  --data-raw '{ "strategy": "oidc", "name": "Scalekit", "options": { "type": "back_channel", "discovery_url": "<SCALEKIT_ENV_URL>/.well-known/openid-configuration", "client_secret" : "<SCALEKIT_CLIENT_SECRET>", "client_id" : "<SCALEKIT_CLIENT_ID>",  "scopes": "openid profile" } }'

```

Use the table below to find out more about how to get the relevant information and replace the variables in the above command.

| Parameter              | Description                                                                                                                                                                         |
| ---------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| AUTH0_TENANT_DOMAIN    | This is your Auth0 tenant url. Typically, looks like https:<nolink />//yourapp.us.auth0.com                                                                                         |
| API_TOKEN              | [Generate an API token](https://auth0.com/docs/secure/tokens/access-tokens/management-api-access-tokens) from your Auth0 dashboard and use it to authenticate your Auth0 API calls. |
| SCALEKIT_ENV_URL       | Find this in your [API config](https://app.scalekit.com) section of Scalekit Dashboard                                                                                              |
| SCALEKIT_CLIENT_SECRET | Generate a new client secret in your [API config](https://app.scalekit.com) section of Scalekit Dashboard and use that here                                                         |
| SCALEKIT_CLIENT_ID     | Find this in your [API config](https://app.scalekit.com) section of Scalekit Dashboard                                                                                              |

After the successful execution of the above API call, you will see a new OpenID connection created in your Auth0 tenant. To confirm this, you can navigate to [Enterprise Connections](https://auth0.com/docs/authenticate/enterprise-connections#view-enterprise-connections) in your Auth0 dashboard.

### 2. Add Redirect URI in Scalekit

After creating Scalekit as a new OIDC connection, you need to

- Copy the Callback URL from your Auth0 Dashboard
- Add it as a new Redirect URI in your Scalekit API Config section.

#### 2a. Copy Callback URL from Auth0

In your Auth0 dashboard, go to Authentication > Enterprise > OpenID Connect > Scalekit > Settings.
Copy the "Callback URL" that's available in the General section of settings.

<figure>![Copy Callback URL from Auth0 Dashboard](../assets/integrations/auth0/1.png)
<figcaption>Copy Callback URL from your Auth0 Dashboard</figcaption></figure>

<br />

#### 2b. Set Redirect URI in Scalekit API Config

Go to your Scalekit dashboard. Select environment as Development or Production. Navigate to the "API Config" in the Settings (left nav). In the Redirect URIs section, select **Add new URI**. Paste the Callback URL that you copied from Auth0 dashboard. Click on Add button.

<figure>![Add new Redirect URI in Scalekit Dashboard](../assets/integrations/auth0/2.png)
<figcaption>Add new Redirect URI in Scalekit Dashboard</figcaption></figure>

<br />

### 3. Onboarding Single Sign-on customers in Scalekit

To onboard new enterprise customers using Single Sign-on login, you need to:

1. **Create an Organization** in Scalekit
2. **Generate Admin Portal link** to allow your customers configure SSO settings
3. **Configure Domain** in the Scalekit dashboard for that Organization.
4. **Update Home Realm Discovery** settings in your Auth0 tenant with this Organization's domain.

You can read more about managing Organizations [here](/docs/manage-scalekit/organization.md).

### 4. Update Home Realm Discovery in Auth0

In step 2, you have successfully configured Scalekit as an OIDC connection in your Auth0 tenant. It's time to enable Home Realm Discovery for your enterprise customers in Auth0. This configuration will help Auth0 determine which users to be routed to login via Single Sign-on.

In your Auth0 dashboard, go to Authentication > Enterprise > OpenID Connect > Scalekit > Login Experience.
Navigate to "Home Realm Discovery" in the Login Experience Customization section.

In the Identity Provider domains, add the comma separated list of domains that need to be authenticated with Single Sign-on via Scalekit. Auth0 uses this configuration to compare the users email domain at the time of login:

- If there is a match in the configured domains, users will be redirected to the Scalekit's Single Sign-on
- If there is no match, users will be prompted to login via other authentication methods like password or passwordless login based on your Auth0 configuration.

For example, if you would like users from three Organizations (FooCorp, BarCorp, AcmeCorp) to access your application using their respective identity providers, you need to add them as a comma separated list foocorp.com, barcorp.com, acmecorp.com. Screenshot below for reference

<figure>![Add domains for Home Realm Discovery in Auth0](../assets/integrations/auth0/3.png)
<figcaption>Add domains for Home Realm Discovery in Auth0</figcaption></figure>

<br />

**Press Save** to save Home Realm Discovery settings.

You have now successfully integrated Scalekit with Auth0, thereby facilitating seamless SSO authentication for your application's users.

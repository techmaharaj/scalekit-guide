---
excerpt: "This article describes how to integrate Scalekit with your Auth0 implementation"
metadata: 
  description: "This document provides a guide on integrating Scalekit with Auth0 applications for seamless Single Sign-on Authentication. It includes steps on configuring Scalekit as an OpenID Connect provider in your Auth0 tenant."
---
# Auth0
<Subtitle>Learn how to integrate Scalekit with Auth0 via OpenID Connect (OIDC)</Subtitle>

## Introduction
This guide is designed to provide you a walkthrough of integrating Scalekit with Auth0, thereby facilitating seamless Single Sign-on (SSO) authentication for your application's users. We demonstrate how to configure Scalekit so that Auth0 can continue to act as the identity management solution for your users and manage the login, session management functionality. 

To begin, here is an overview of the SSO workflow.

<figure>![Scalekit - Auth0 Integration](./Auth0/How%20Scalekit%20connects%20with%20Auth0.png)
<figcaption>Scalekit - Auth0 Integration</figcaption></figure>


Scalekit is designed as a fully compatible OpenID Connect (OIDC) provider, thus streamlining the integration. As Auth0 continues to act as your identity management system, you'll be able to seamlessly integrate Single Sign-On into your application without having to write code.

## Before getting started

**Note** that Auth0 classifies OpenID Connect as Enterprise Connection and this feature is available only in the paid plans of Auth0. Please check whether your current plan has access to creating Enterprise Connections with OpenID Connect providers. 

Ensure you have: 
- access to Auth0's Authenticate dashboard. You need to have a role as an 'Admin' or 'Editor - Connections' to create and edit OIDC connections on Auth0.
- access to your Scalekit dashboard.

## Integrate Scalekit with Auth0

### 1. Adding Scalekit as OpenID Connect Connection

:::info Note
Because of an [existing issue](https://community.auth0.com/t/creating-an-oidc-connection-fails-with-options-issuer-is-required-error/128189) in adding OIDC Providers via Auth0 Management Console, you are required to use Auth0 API to create OpenID Connect Connections via API 
:::

You need to use the Auth0 Management API to create Scalekit as a OpenID connection for your tenant. See the sample curl command below

```bash showLineNumbers

curl --request POST \
  --url 'https://<AUTH0_TENANT_DOMAIN>.us.auth0.com/api/v2/connections' \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  --header 'authorization: Bearer <API_TOKEN>' \
  --data '{ "strategy": "oidc", "name": "Scalekit", "options": { "type": "back_channel", "discovery_url": "<SCALEKIT_ENV_URL>/.well-known/openid-configuration", "client_secret" : "<SCALEKIT_CLIENT_SECRET>", "client_id" : "<SCALEKIT_CLIENT_ID>",  "scopes": "openid profile" } }'

```

After the successful execution of the above API call, you will see a new OpenID Connect Connection created in your Auth0 tenant.

### 2. Add Redirect URI in Scalekit API Config

After creating Scalekit as a new OIDC connection, you need to copy the Callback URL from your Auth0 Dashboard and add it as a new Redirect URI in your Scalekit API Config section.

![Copy Redirect URI from your Auth0 Dashboard](./Auth0/SCR-20240507-omfj.png)

![Add Redirect URI in your Scalekit Dashboard](./Auth0/SCR-20240507-omtp.png)


### 3. Enable Home Realm Discovery

After you have successfully configured Scalekit as OIDC provider in your Auth0 project, it's time to onboard your enterprise customers and enable home realm discovery for their domains so that they will be automatically routed to SSO connection based on their email domain and Auth0 will route the requests to Scalekit.

![Add domains for HRD](./Auth0/SCR-20240507-onbs.png)


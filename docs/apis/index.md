---
hide_table_of_contents: true
title: ""
---

import InstallSDK from '../templates/install-sdk.md';

### Introduction

<div class="row section">
<div class="col col--6">
Scalekit API is modeled around the [REST](https://en.wikipedia.org/wiki/REST) architecture style. That means, our API has predictable resource-oriented URLs, accepts form-encoded request bodies and produces JSON formatted responses, uses standard HTTP verbs and error codes.

Apart from REST APIs, we have published SDKs in some of the popular languages as shown below. You can use these SDKs and integrate with Scalekit much faster.

Some additional instructions around using our APIs

- API Endpoint Host must use the `Environment URL` of the environment you are targeting.
- API requests without appropriate authentication headers will fail with 401 status code.

Read below to understand more about how to authenticate the API calls and how to handle errors appropriately.

</div>
<div class="col col--6">
**Just getting Started?**

Refer to our <a href="/" target="_blank">Quick Start Guide</a>
<br />
**SDKs**
<InstallSDK />

<CodeWithHeader title="API Server Endpoint">

```bash
# use the environment url found in API Config section
https://yourcompany.scalekit.com

# or, if you have enabled CNAME, you can use that too
https://auth.yoursaas.com

```

</CodeWithHeader>
</div>
</div>

### Authentication

<div class="row section">
    <div class="col col--6">
Scalekit API uses [OAuth2 Client Credentials](https://www.oauth.com/oauth2-servers/access-tokens/client-credentials) based authentication. You can view and manage the necessary information from your `API Config` section in the Scalekit Dashboard.

You will need the following information to authenticate with Scalekit APIs

- Client ID
- Client Secret
- Environment URL

You can obtain a secure token by making `POST` call to the `https://{ENV_URL}/oauth/token` endpoint and sending client_id and client_secret as part of the request body.
</div>
<div class="col col--6">

<Tabs groupId="tech-stack">
<TabItem value="curl" label="cURL">

```bash showLineNumbers
$ curl https://{ENV_URL}/oauth/token \
  -X POST \
  -H 'Content-Type: application/x-www-form-urlencoded' \
  -d 'client_id={client_id}' \
  -d 'client_secret={client_secret}' \
  -d 'grant_type=client_credentials'\
```

</TabItem>
<TabItem value="nodejs" label="Node.js">

```js showLineNumbers
// scalekit client takes care of authentication behind the scenes.
const scalekit = new Scalekit(
  SCALEKIT_ENVIRONMENT_URL,
  SCALEKIT_CLIENT_ID,
  SCALEKIT_CLIENT_SECRET
);
```

</TabItem>
<!-- <TabItem value="golang" label="Go">

```go
go get https://www.github.com/scalekit-inc/go-sdk
```

</TabItem> -->
</Tabs>

<CodeWithHeader title="Response">
```js showLineNumbers
{
  "access_token": "DCR5c8139165228a82e442445fe01c16",
  "token_type": "bearer",
  "expires_in": 1799
}
```
</CodeWithHeader>
</div>
</div>
#### Using Access Token
<div class="row section">
    <div class="col col--6">
The `access_token` is the OAuth access token you need to use for all subsequent API calls to Scalekit.\n\nTo make a request to one of our APIs, you need to include the access token in the Authorization header of the request as Bearer 'access_token'.

Please make sure that you keep your Client Secrets safely. Do not share your client secret in publicly accessible areas such as GitHub, client-side code, etc.

Refer to [this guide](/security/client-secrets) to understand some of the best practices around keeping client secrets secure.

Our SDKs will automatically handle the API authentication and error handling to make the job of using our APIs much easier for you.
</div>
<div class="col col--6">

```shell showLineNumbers
$ curl --request GET "https://{ENV_URL}/api/v1/organizations" \
-H "Content-Type: application/json" \
-H "Authorization: Bearer {access_token}"
```

</div>
</div>
### Error Handling

As mentioned earlier, Scalekit APIs return appropriate HTTP Status Codes along with the detailed error messages in case of invalid usage of APIs. In general:

- `200 or 201`: API request is successful
- `400`: The request was unacceptable, often due to missing a required parameter.
- `401`: Invalid Authentication Headers found in the request.
- `404`: Resource not found
- `429`: Too many requests hit the API too quickly. Retry the request after a cool-off period.
- `500 or 501 or 504`: Something went wrong at our end. However rare they are, we automatically log these requests for proactive support and fixing the underlying issue.

Along with HTTP Status Codes, we also respond with detailed error messages. An example error message for a 401 error is shown below.

```json
{
  "code": 16,
  "message": "Token empty",
  "details": [
    {
      "@type": "type.googleapis.com/scalekit.v1.errdetails.ErrorInfo",
      "error_code": "UNAUTHENTICATED"
    }
  ]
}
```

We strongly recommend you to handle errors gracefully while writing code using our SDKs.

### Single Sign-on {#tag/sso}

<div class="row section">
    <div class="col col--6">
        When you need one of your customers to login via Enterprise SSO, you can redirect them to Scalekit's Authorization URL with necessary details about the organization or the SSO connection. Scalekit will seamleslly deal with integrating with any Identity Provider and exchanges user information via SAML or OIDC or OAuth2.

        More details about the Single Sign-on flow is described <a href="/">here</a>
    </div>
    <div class="col col--6">
        <Endpoints category="sso" />
    </div>
</div>

#### Authorization URL {#tag/sso/get/oauth/authorize}

<div class="row section">
    <div class="col col--6">
Authorization URL initiates the Login flow with Scalekit.

Scalekit expects atleast one of the following parameters to be present. The parameters are used to determine the SSO connection used to Login in the user.

**organization_id** - ID of Organization. The user will be redirected to the SSO connection's identity provider configured for that organization.

**connection_id** - ID of the SSO connection. If the Connection's status is active, the user will be redirected to the SSO Connection's identity provider configured

**domain** - Email domain of the user. Domain should be mapped to an Organization. The SSO connection from the org would be used to login to the app.

<Parameters endpoint="/oauth/authorize" method="get" />

</div>
<div class="col col--6">
</div>
</div>

#### Token Endpoint {#tag/sso/get/oauth/token}

### Organization

#### List Organizations

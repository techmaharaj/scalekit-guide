---
hide_table_of_contents: true
title: "API Reference"

---
import InstallSDK from '@site/docs/templates/install-sdk.md';
import {sidebarItems} from '@site/src/components/IntersectingHeader';

<div class="custom_container">

<aside>
<div class="sidebar">
<div class="sidebarContainer">
<nav class="menu thin-scrollbar">
<ul class="theme-doc-sidebar-menu menu__list">
{sidebarItems}
</ul>
</nav>
</div>
</div>
</aside>

<div class="theme-doc-markdown markdown">
<IntersectingHeader id="introduction" title="Introduction" initialInView="true" addSidebar="true" classList=""/>
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
<CodeWithHeader title="Client Libraries">
<InstallSDK />
</CodeWithHeader>

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

<IntersectingHeader id="authentication" title="Authentication" initialInView="false"/>

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
<CodeWithHeader title="API Authentication">
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
</CodeWithHeader>
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

<IntersectingHeader id="using-access-token" title="Using Access Token" subheading="true" classList="ApiCategoryList"/>

<div class="row section">
    <div class="col col--6">
The `access_token` is the OAuth access token you need to use for all subsequent API calls to Scalekit.

To make a request to one of our APIs, you need to include the access token in the Authorization header of the request as Bearer 'access_token'.

Please make sure that you keep your Client Secrets safely. Do not share your client secret in publicly accessible areas such as GitHub, client-side code, etc.

Our SDKs will automatically handle the API authentication and error handling to make the job of using our APIs much easier for you.
</div>
<div class="col col--6">
<CodeWithHeader title="Using Bearer Token">

```shell showLineNumbers
$ curl --request GET "https://{ENV_URL}/api/v1/organizations" \
-H "Content-Type: application/json" \
-H "Authorization: Bearer {access_token}"
```

</CodeWithHeader>

</div>
</div>

<IntersectingHeader id="error-handling" title="Error Handling"/>

<div class="row section">
    <div class="col col--6">
As mentioned earlier, Scalekit APIs return appropriate HTTP Status Codes along with the detailed error messages in case of invalid usage of APIs.

You can see the list of different HTTP Status Codes and the error message format in the right pane. We strongly recommend you to handle errors gracefully while writing code using our SDKs.
</div>
<div class="col col--6">
<CodeWithHeader title="Error Codes">

| HTTP Status | Description |
| - | - |
| 200 or 201 | API request is successful |
| 400 | The request was unacceptable, often due to missing a required parameter. |
| 401 | Invalid Authentication Headers found in the request. |
| 404 | Resource not found |
| 429 | Too many requests hit the API too quickly. Retry the request after a cool-off period. |
| 500 or 501 or 504 | Something went wrong at our end. These are usually a very rare occurrence. We automatically log these requests for alert our on-call engineers |

</CodeWithHeader>

<CodeWithHeader title="401: Error Message">
```js
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
</CodeWithHeader>
</div>
</div>

<!-- Single Sign-on Section -->
<IntersectingHeader id="tag/Authentication" title="Single Sign-on"/>
<div class="row section">
    <div class="col col--6">
        When you need one of your customers to login via Enterprise SSO, you can redirect them to Scalekit's Authorization URL with necessary details about the organization or the SSO connection. Scalekit will seamleslly deal with integrating with any Identity Provider and exchanges user information via SAML or OIDC or OAuth2.

More details about the Single Sign-on flow is described <Link href="/" target="_blank">here</Link>
    </div>
    <div class="col col--6">
        <Endpoints tag="Authentication" />
    </div>
</div>

<APIEndpoint method="get" endpoint="/oauth/authorize" tag="Authentication" />
<APIEndpoint method="post" endpoint="/oauth/token" tag="Authentication" />

<!-- Organization Tag -->
<IntersectingHeader id="tag/Organization" title="Organization" />

<div class="row section">
    <div class="col col--6">
Organization represents a customer or a tenant of your application. Use this to create enterprise Single Sign-on connections or Admin Portal links for your customers.
    </div>
    <div class="col col--6">
        <Endpoints tag="Organization" />
    </div>
</div>

<IntersectingHeader id="tag/Organization/object" title="The Organization Object" subheading="true" classList="ApiCategoryList"/>

<div class="row section">
    <div class="col col--6">
<OrganizationAttributes />
    </div>
    <div class="col col--6">
        <CodeWithHeader title="Organization Object">

```js
{
    "id": "org_2123312131125533",
    "display_name": "Acme Corp",
    "create_time": "2024-001-05T14:48:00.000Z",
    "external_id": "my_unique_id",
    "metadata": {
      "someKey": "somevalue"
    },
    "region_code": "US",
    "update_time": "…"
}
```

</CodeWithHeader>
    </div>
</div>
<APIEndpoint tag="Organization" method="get" endpoint="/api/v1/organizations" />
<APIEndpoint tag="Organization" method="post" endpoint="/api/v1/organizations" />
<APIEndpoint tag="Organization" method="get" endpoint="/api/v1/organizations/{id}" />
<APIEndpoint tag="Organization" method="patch" endpoint="/api/v1/organizations/{id}" />
<APIEndpoint tag="Organization" method="delete" endpoint="/api/v1/organizations/{id}" />

<!-- Admin Portal Tag -->
<IntersectingHeader id="tag/Admin Portal" title="Admin Portal" />

<div class="row section">
    <div class="col col--6">
Organization represents a customer or a tenant of your application. Use this to create enterprise Single Sign-on connections or Admin Portal links for your customers.
    </div>
    <div class="col col--6">
        <Endpoints tag="Admin Portal" />
    </div>
</div>

<IntersectingHeader id="tag/Admin Portal/object" title="The Admin Portal Object" subheading="true" classList="ApiCategoryList"/>

<div class="row section">
    <div class="col col--6">
<OrganizationAttributes />
    </div>
    <div class="col col--6">
        <CodeWithHeader title="Admin Portal Object">

```js
{
    "id": "org_2123312131125533",
    "display_name": "Acme Corp",
    "create_time": "2024-001-05T14:48:00.000Z",
    "external_id": "my_unique_id",
    "metadata": {
      "someKey": "somevalue"
    },
    "region_code": "US",
    "update_time": "…"
}
```

</CodeWithHeader>
    </div>
</div>
<APIEndpoint tag="Admin Portal" method="get" endpoint="/api/v1/organizations/{id}/portal_links" />
<APIEndpoint tag="Admin Portal" method="put" endpoint="/api/v1/organizations/{id}/portal_links" />
<APIEndpoint tag="Admin Portal" method="delete" endpoint="/api/v1/organizations/{id}/portal_links" />

<!-- Connections Tag -->
<IntersectingHeader id="tag/Connection" title="Connection" />

<div class="row section">
    <div class="col col--6">
Organization represents a customer or a tenant of your application. Use this to create enterprise Single Sign-on connections or Admin Portal links for your customers.
    </div>
    <div class="col col--6">
        <Endpoints tag="Connection" />
    </div>
</div>

<IntersectingHeader id="tag/Connection/object" title="The Connection Object" subheading="true" classList="ApiCategoryList"/>

<div class="row section">
    <div class="col col--6">
<OrganizationAttributes />
    </div>
    <div class="col col--6">
        <CodeWithHeader title="Connection Object">

```js
{
    "id": "org_2123312131125533",
    "display_name": "Acme Corp",
    "create_time": "2024-001-05T14:48:00.000Z",
    "external_id": "my_unique_id",
    "metadata": {
      "someKey": "somevalue"
    },
    "region_code": "US",
    "update_time": "…"
}
```

</CodeWithHeader>
    </div>
</div>
<APIEndpoint tag="Connection" method="get" endpoint="/api/v1/connections" />
<APIEndpoint tag="Connection" method="get" endpoint="/api/v1/organizations/{organization_id}/connections/{id}" />
<APIEndpoint tag="Connection" method="patch" endpoint="/api/v1/organizations/{organization_id}/connections/{id}:disable" />
<APIEndpoint tag="Connection" method="patch" endpoint="/api/v1/organizations/{organization_id}/connections/{id}:enable" />
</div>
</div>

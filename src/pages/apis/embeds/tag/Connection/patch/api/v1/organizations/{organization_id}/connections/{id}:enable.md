
<CodeWithHeader method="patch" endpoint="/api/v1/organizations/{organization_id}/connections/{id}:enable">
<Tabs groupId="tech-stack">
<TabItem value="curl" label="cURL">

```bash showLineNumbers
curl --location --request PATCH 'https://$ENV_URL/api/v1/organizations/{organization_id}/connections/{id}:enable' \
--header 'Accept: application/json'
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

```js
{
  "next_page_token": "…",
  "organizations": [
    {
      "create_time": "2024-001-05T14:48:00.000Z",
      "display_name": "Acme Corp",
      "external_id": "my_unique_id",
      "id": "org_2123312131125533",
      "metadata": {
        "someKey": "…"
      },
      "region_code": "US",
      "update_time": "…"
    }
  ],
  "total_size": 1
}
```

</CodeWithHeader>

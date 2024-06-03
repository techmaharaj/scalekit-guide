
<CodeWithHeader method="get" endpoint="/api/v1/organizations/{organization_id}/connections/{id}">
<Tabs groupId="tech-stack" querystring>
<TabItem value="curl" label="cURL">

```bash showLineNumbers
curl --location 'https://$ENV_URL/api/v1/organizations/{organization_id}/connections/{id}' \
--header 'Accept: application/json'
```

</TabItem>
<TabItem value="nodejs" label="Node.js">

```js showLineNumbers
// scalekit client takes care of authentication behind the scenes.
const sc = new Scalekit(
  SCALEKIT_ENVIRONMENT_URL,
  SCALEKIT_CLIENT_ID,
  SCALEKIT_CLIENT_SECRET
);

const connection = await sc.connection.getConnection(connectionId, organizationId)

```

</TabItem>
<TabItem value="py" label="Python">

```python showLineNumbers
# scalekit client takes care of authentication behind the scenes.
sc = ScalekitClient(
  SCALEKIT_ENVIRONMENT_URL,
  SCALEKIT_CLIENT_ID,
  SCALEKIT_CLIENT_SECRET
)
connection = sc.connection.get_connection(connection_id,organization_id)

```

</TabItem>
</Tabs>
</CodeWithHeader>
<CodeWithHeader title="Response">

```js
{
  "create_time": "2024-01-05T14:48:00.000Z",
  "display_name": "Acme Corp",
  "external_id": "my_unique_id",
  "id": "org_2123312131125533",
  "metadata": {
    "someKey": "…"
  },
  "region_code": "US",
  "update_time": "…"
}
```

</CodeWithHeader>

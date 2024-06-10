
<CodeWithHeader method="post" endpoint="/api/v1/organizations">
<Tabs groupId="tech-stack" querystring>
<TabItem value="curl" label="cURL">

```bash showLineNumbers
curl --location 'https://$ENV_URL/api/v1/organizations' \
--header 'Content-Type: application/json' \
--header 'Accept: application/json' \
--data '{
  "display_name": "<string>",
  "external_id": "<string>",
  "metadata": {
    "esse47": "<string>"
  }
}'
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

const organization = await sc.organization.createOrganization(
  name, 
  {externalId: "externalId"}
)
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
options = CreateOrganizationOptions()
options.external_id = "externalId"
organization = sc.organization.create_organization(
  name, 
  options=options
)
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

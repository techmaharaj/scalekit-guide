
<CodeWithHeader method="delete" endpoint="/api/v1/organizations">
<Tabs groupId="tech-stack" queryString>
<TabItem value="curl" label="cURL">

```bash showLineNumbers
curl --location --request DELETE 'https://$ENV_URL/api/v1/organizations/{id}' \
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

await sc.organization.deleteOrganization(organizationId)

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

sc.organization.delete_organization(organization_id)
```

</TabItem>
</Tabs>
</CodeWithHeader>
<CodeWithHeader title="Response">

```js
{}
```

</CodeWithHeader>

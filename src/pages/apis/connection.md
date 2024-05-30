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

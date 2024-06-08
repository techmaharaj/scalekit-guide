<IntersectingHeader id="tag/Organization" title="Organization" />

<div className="row section">
    <div className="col col--6">
Organization represents a customer or a tenant of your application. Use this to create enterprise Single Sign-on connections or Admin Portal links for your customers.
    </div>
    <div className="col col--6">
        <Endpoints tag="Organization" />
    </div>
</div>

<IntersectingHeader id="tag/Organization/object" title="The Organization Object" subheading="true" classList="ApiCategoryList"/>

<div className="row section">
    <div className="col col--6">
<ul className="ApiReference-Parameters">
      <li className="ApiReference-Parameter header">Attributes</li>
      <Parameter
        attrKey="id"
        type="string"
        description="Unique ID of the organization"
      />
      <Parameter
        attrKey="display_name"
        type="string"
        description="Display Name of the Organization"
      />
      <Parameter
        attrKey="external_id"
        type="string"
        description="Unique ID of this organization according to your system. You can store your unique ID for this organization in Scalekit's system and later use this to fetch Organization and Connection details. This is helpful if you don't want to persist Scalekit's Unique Identifiers in your database"
      />
      <Parameter
        attrKey="metadata"
        type="map"
        description="Set of key-value pairs that you can attach to the Organization object. This can be useful for storing additional information about the Organization in a structured format."
      ></Parameter>
      <Parameter
        attrKey="region_code"
        type="enum"
        description="Region in which this organization data is stored in. By default, the environment's `region_code` is used to store this organization's data">
        <details>
        <summary>Possible values</summary>
            <Parameter attrKey="US" />
            <Parameter attrKey="EU" />
        </details>
      </Parameter>
      <Parameter
        attrKey="create_time"
        type="string"
        description="Timestamp at which this organization record was created in ISO 8601 format"
      />
      <Parameter
        attrKey="update_time"
        type="string"
        description="Timestamp at which this organization record was last updated in ISO 8601 format"
      />
    </ul>
    </div>
    <div className="col col--6">
    <div className="scalar-card-sticky">
        <CodeWithHeader title="Organization Object">

```js
{
    "id": "org_2123312131125533",
    "display_name": "Acme Corp",
    "create_time": "2024-01-05T14:48:00.000Z",
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
</div>
<APIEndpoint tag="Organization" method="get" endpoint="/api/v1/organizations" />
<APIEndpoint tag="Organization" method="post" endpoint="/api/v1/organizations" />
<APIEndpoint tag="Organization" method="get" endpoint="/api/v1/organizations/{id}" />
<APIEndpoint tag="Organization" method="patch" endpoint="/api/v1/organizations/{id}" />
<APIEndpoint tag="Organization" method="delete" endpoint="/api/v1/organizations/{id}" />

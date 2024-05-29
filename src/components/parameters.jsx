import Markdown from "react-markdown";

var data = require("../../openapi/scalekit.swagger.json");

function Parameter({ attrKey, type, required, description }) {
  return (
    <li className="ApiReference-Parameter">
      <div className="attr">
        <span className="key">{attrKey}</span>
        <span className="type">{type}</span>
        {required ? <span className="required">required</span> : ""}
      </div>
      <div className="desc">
        <Markdown>{description}</Markdown>
      </div>
    </li>
  );
}

export default function Parameters({
  header = "Parameters",
  endpoint,
  method,
}) {
  return (
    <ul className="ApiReference-Parameters">
      <li className="ApiReference-Parameter header">{header}</li>
      {data["paths"][endpoint][method]["parameters"].map((param, index) => (
        <Parameter
          key={index}
          attrKey={param.name}
          type={param.type}
          required={param.required}
          description={param.description}
        />
      ))}
    </ul>
  );
}

export function OrganizationAttributes() {
  return (
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
        attrKey="create_time"
        type="string"
        description="Timestamp at which this organization record was created in ISO 8601 format"
      />
      <Parameter
        attrKey="update_time"
        type="string"
        description="Timestamp at which this organization record was last updated in ISO 8601 format"
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
      />
    </ul>
  );
}

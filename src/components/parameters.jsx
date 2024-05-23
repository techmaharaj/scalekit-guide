import Markdown from "react-markdown";

var data = require("../../openapi/scalekit.swagger.json");
let endpoints = {
  sso: [
    {
      href: "#tag/sso/get/oauth/authorize",
      label: "/oauth/authorize",
      method: "GET",
    },
    { href: "#tag/sso/get/oauth/token", label: "/oauth/token", method: "POST" },
  ],
};

function Parameter({ attrKey, type, required, description }) {
  return (
    <li className="ApiReference-Parameter">
      <div className="attr">
        <span className="key">{attrKey}</span>
        <span className="type">{type}</span>
        {required ? <span class="required">required</span> : ""}
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

      {console.log(method)}
      {console.log(data["paths"][endpoint][method]["parameters"])}
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

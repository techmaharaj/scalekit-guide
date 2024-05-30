import Markdown from "react-markdown";

var data = require("../../openapi/scalekit.swagger.json");

export function Parameter({ children, ...props }) {
  return (
    <li className="ApiReference-Parameter">
      <div className="attr">
        <span className="key">{props.attrKey}</span>
        <span className="type">{props.type}</span>
        {props.required ? <span className="required">required</span> : ""}
      </div>
      <div className="desc">
        <Markdown>{props.description}</Markdown>
      </div>
      {children}
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

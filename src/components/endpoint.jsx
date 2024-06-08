var data = require("../../openapi/scalekit.swagger.json");

function getEndPoints(tag) {
  let desiredEndpoints = [];
  for (const endpoint in data["paths"]) {
    // go through all the endpoints
    for (const key in data["paths"][endpoint]) {
      // Go through all the methods with that endpoint
      const value = data["paths"][endpoint][key];
      // get the actual method + endpoint object and check if it contains tag
      if (value.tags.includes(tag)) {
        desiredEndpoints.push({
          method: key,
          label: endpoint,
          href: "#tag/" + tag + "/" + key + endpoint,
        });
      }
    }
  }
  return desiredEndpoints;
}

function Endpoint({ href, method, label }) {
  return (
    <a className="endpoint" href={href}>
      <span className={method}>{method}</span>
      <span>{label}</span>
    </a>
  );
}

export default function Endpoints({ tag }) {
  return (
    <div className="scalar-card scalar-card-sticky">
      <div className="scalar-card-content scalar-card--muted scalar-card-header">
        <div className="scalar-card-header-slots">
          <div className="scalar-card-header-slot scalar-card-header-title">
            Endpoints
          </div>
          <div className="scalar-card-header-slot scalar-card-header-actions"></div>
        </div>
      </div>
      <div className="scalar-card-content scalar-card--muted custom-scroll">
        <div className="endpoints">
          {getEndPoints(tag).map((endpoint) => (
            <Endpoint
              key={endpoint.href}
              href={endpoint.href}
              method={endpoint.method}
              label={endpoint.label}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

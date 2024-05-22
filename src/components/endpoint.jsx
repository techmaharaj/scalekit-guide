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

function Endpoint({ href, method, label }) {
  return (
    <a className="endpoint" href={href}>
      <span className={method}>{method}</span>
      <span>{label}</span>
    </a>
  );
}

export default function Endpoints({ category }) {
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
          {endpoints[category].map((endpoint) => (
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

export default function CodeWithHeader({ children, ...props }) {
  return (
    <div className="scalar-card scalar-card-sticky">
      <div className="scalar-card-content scalar-card--muted scalar-card-header">
        <div className="scalar-card-header-slots">
          <div className="scalar-card-header-slot scalar-card-header-title">
            {props.method ? (
              <>
                <span className={"method " + props.method}>{props.method}</span>
                <span className="endpoint">{props.endpoint}</span>
              </>
            ) : (
              props.title
            )}
          </div>
        </div>
      </div>
      <div className="scalar-card-content scalar-card--muted custom-scroll">
        <div>{children}</div>
      </div>
    </div>
  );
}

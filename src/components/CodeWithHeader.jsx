export default function CodeWithHeader({ children, ...props }) {
  return (
    <div class="scalar-card scalar-card-sticky">
      <div class="scalar-card-content scalar-card--muted scalar-card-header">
        <div class="scalar-card-header-slots">
          <div class="scalar-card-header-slot scalar-card-header-title">
            {props.title}
          </div>
        </div>
      </div>
      <div class="scalar-card-content scalar-card--muted custom-scroll">
        <div>{children}</div>
      </div>
    </div>
  );
}

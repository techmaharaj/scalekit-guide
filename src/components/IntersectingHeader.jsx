import { InView } from "react-intersection-observer";

const activeLinkClass = "menu__link--active";
let currentActiveLink,
  sidebarItems = [];
function highlightIntersectingSection(id) {
  var newActiveLink = document.querySelector(
    ".menu__list a[href='#" + id + "']"
  );
  if (!newActiveLink) {
    return;
  }

  currentActiveLink?.classList?.remove(activeLinkClass);
  newActiveLink.classList?.add(activeLinkClass);
  currentActiveLink = newActiveLink;
}
export function addSideBarItem(props) {
  sidebarItems.push(<SidebarItem {...props}></SidebarItem>);
}

function SidebarItem(props) {
  return (
    <li
      key={props.id}
      className={
        "theme-doc-sidebar-item-link theme-doc-sidebar-item-link-level-1 menu__list-item " +
        props.classList
      }
    >
      <a className="menu__link" href={"#" + props.id}>
        {props.title}
      </a>
    </li>
  );
}
export default function IntersectingHeader({ ...props }) {
  {
    addSideBarItem(props);
  }
  return (
    <InView
      initialInView={props.initialInView}
      rootMargin="0% 0% -50% 0%"
      onChange={(inView, entry) => {
        if (inView) {
          highlightIntersectingSection(entry.target.id);
        }
      }}
    >
      {props.subheading
        ? ({ inView, ref, entry }) => (
            <h3
              id={props.id}
              ref={ref}
              className="headingWithStickyNavBar anchor"
            >
              {props.title}
            </h3>
          )
        : ({ inView, ref, entry }) => (
            <h2
              id={props.id}
              ref={ref}
              className="headingWithStickyNavBar anchor"
            >
              {props.title}
            </h2>
          )}
    </InView>
  );
}

export { sidebarItems };

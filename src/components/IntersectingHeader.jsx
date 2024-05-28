import { InView } from "react-intersection-observer";

const activeLinkClass = "menu__link--active";
let currentActiveLink;
function highlightIntersectingSection(id) {
  console.log("Inview:", id);
  var newActiveLink = document.querySelector(
    ".menu__list a[href='#" + id + "']"
  );
  if (!newActiveLink) {
    return;
  }
  // remove the active link's selector.
  //var hasActiveLink = document.querySelector("a." + activeLinkClass);
  if (currentActiveLink) {
    currentActiveLink.classList?.remove(activeLinkClass);
  }

  newActiveLink.classList?.add(activeLinkClass);
  currentActiveLink = newActiveLink;
}

const IntersectingHeader = ({ ...props }) => (
  <InView
    initialInView={props.initialInView}
    rootMargin="0% 0 -30% 0"
    onChange={(inView, entry) => {
      if (inView) {
        highlightIntersectingSection(entry.target.id);
      }
    }}
  >
    {props.subheading
      ? ({ inView, ref, entry }) => (
          <h4
            id={props.id}
            ref={ref}
            className="headingWithStickyNavBar anchor"
          >
            {props.title}
          </h4>
        )
      : ({ inView, ref, entry }) => (
          <h3
            id={props.id}
            ref={ref}
            className="headingWithStickyNavBar anchor"
          >
            {props.title}
          </h3>
        )}
  </InView>
);

export default IntersectingHeader;

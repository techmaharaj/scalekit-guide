import { InView } from "react-intersection-observer";
import {useEffect} from "react";
import {useHeaderContext} from "@site/src/components/SidebarWrapper";

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


export default function IntersectingHeader({ ...props }) {

  const {addItem} = useHeaderContext()

  useEffect(() => {
    addItem(props);
  }, []);

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


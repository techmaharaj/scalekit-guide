
export function onRouteDidUpdate({location, previousLocation}) {
  if (location.pathname !== previousLocation?.pathname) {
    document.documentElement.dataset.insideIframe =
        (document.location.href.includes('/integrations/') &&
         window.parent !== window);
  }
  var homeLink =
      document.querySelector('a.navbar__item.navbar__link[href="\/"');
  if (homeLink) {
    if (document.location.href.includes('/integrations') ||
        document.location.href.includes('/api-reference')) {
      // remove .navbar__link--active class from Documentation narvbar link

      homeLink.classList.remove('navbar__link--active');

    } else {
      homeLink.classList.add('navbar__link--active');
    }
  }
}

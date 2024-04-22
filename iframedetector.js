
export function onRouteUpdate({location, previousLocation}) {
  if (location.pathname !== previousLocation?.pathname) {
    document.documentElement.dataset.insideIframe =
        (document.location.href.includes('/integrations/') &&
         window.parent !== window);
  }
}
import ExecutionEnvironment from '@docusaurus/ExecutionEnvironment';

if (ExecutionEnvironment.canUseDOM) {
  document.documentElement.dataset.insideIframe = (window.parent !== window);
}
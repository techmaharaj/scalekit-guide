import { themes as prismThemes } from 'prism-react-renderer';
import type { Config } from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';
import type { ScalarOptions } from '@scalar/docusaurus';

const config: Config = {
  title: 'Scalekit Docs',
  tagline: 'Enterprise Ready Authentiction Platform for SaaS',
  favicon: 'img/favicon.ico',
  url: 'https://docs.scalekit.com',
  baseUrl: '/',
  trailingSlash: false,
  organizationName: 'scalekit-inc',
  projectName: 'docs',
  deploymentBranch: 'gh-pages',
  onBrokenLinks: 'log',
  onBrokenMarkdownLinks: 'warn',
  clientModules: ['./iframedetector.js'],
  i18n: { defaultLocale: 'en', locales: ['en'] },
  plugins: [
    [
      '@scalar/docusaurus',
      {
        label: '',
        route: '/api-reference',
        configuration: {
          isEditable: false,
          spec: {
            url: 'https://raw.githubusercontent.com/scalekit-inc/docs/main/openapi/scalekit.swagger.json',
          },
          searchHotKey: 'b',
          hideModels: false,
          showSidebar: true,
          hiddenClients: [
            'c',
            'objc',
            'clojure',
            'powershell',
            'swift',
            'cohttp',
          ],
          hideDownloadButton: true,
          darkMode: false,
          // customCss: './css/custom.css',
        },
      } as ScalarOptions,
    ],
    'plugin-image-zoom',
    './plugins/learn-filters',
  ],
  presets: [
    [
      'classic',
      {
        docs: {
          showLastUpdateTime: false,
          sidebarCollapsed: false,
          sidebarCollapsible: false,
          sidebarPath: './sidebars.ts',
          routeBasePath: '/',
        },
        blog: false,
        theme: {
          customCss: ['./src/css/custom.css'],
        },
      } satisfies Preset.Options,
    ],
    // Redocusaurus config
    // [
    //   'redocusaurus',
    //   {
    //     // Plugin Options for loading OpenAPI files
    //     specs: [
    //       // Pass it a path to a local OpenAPI YAML file
    //       {
    //         // Redocusaurus will automatically bundle your spec into a single
    //         file during the build spec: 'openapi/scalekit.swagger.json',
    //         route: '/api',

    //       },

    //     ],
    //     // Theme Options for modifying how redoc renders them
    //     theme: {
    //       // Change with your site colors
    //       primaryColor: '#1890ff',
    //     },
    //   },
    // ] satisfies Redocusaurus.PresetEntry,
  ],
  themeConfig: {
    docs: {
      sidebar: {
        hideable: true,
      },
    },

    navbar: {
      // title: 'Scalekit Docs',
      logo: {
        src: 'https://cdn.scalekit.cloud/v1/scalekit-logo-dark.svg',
        srcDark:
          'https://assets-global.website-files.com/65b87d98fa638289e10b8f61/65c269053d86c92e0cf91db5_scalekit-logo.svg',
      },
      items: [
        // {
        //   to: '/home',
        //   label: 'Home',
        //   position: 'left',
        // },
        // {
        //   to: '/',
        //   label: 'Documentation',
        //   position: 'left',
        // },
        // {
        //   to: '/integrations',
        //   label: 'Integrations',
        //   position: 'left',
        // },
        {
          type: 'search',
          position: 'right',
        },
        {
          to: 'https://app.scalekit.com',
          label: 'Go to Dashboard ->',
          position: 'right',
          className: 'loginLink',
        },
      ],
    },
    imageZoom: {
      // CSS selector to apply the plugin to, defaults to '.markdown img'
      selector: '.markdown :not(.cardContainer h3) > img',
      // Optional medium-zoom options
      // see: https://www.npmjs.com/package/medium-zoom#options
      options: {
        margin: 48,
        background: '#000000CC',
        scrollOffset: 48,
        // container: '#zoom-container',
        // template: '#zoom-template',
      },
    },
    colorMode: {
      defaultMode: 'light',
      disableSwitch: true,
      respectPrefersColorScheme: false,
    },
    algolia: {
      appId: '7554BDRAJD',
      apiKey: '0a906499d09119c83fd6d0568e7f8517',
      indexName: 'scalekit',
      contextualSearch: false,
      insights: true,
      searchPagePath: false,
    },
    prism: {
      theme: prismThemes.duotoneLight,
      additionalLanguages: ['bash'],
    },
  } satisfies Preset.ThemeConfig,
};

export default config;

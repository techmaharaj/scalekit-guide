import { themes as prismThemes } from 'prism-react-renderer';
import type { Config } from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';
import type { ScalarOptions } from '@scalar/docusaurus'


const config: Config = {
  title: 'Scalekit | Developer Documentation',
  tagline: 'Enterprise Ready Authentiction Platform for SaaS',
  favicon: 'img/favicon.ico',

  // Set the production url of your site here
  url: 'https://docs.scalekit.com',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/',
  trailingSlash: false,

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'scalekit-inc', // Usually your GitHub org/user name.
  projectName: 'docs', // Usually your repo name.
  deploymentBranch: 'gh-pages',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  clientModules:['./iframedetector.js'],
  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en']
  },
  plugins: [
    [
      '@scalar/docusaurus',
      {
        label: 'API Reference',
        route: '/api-reference',
        configuration: {
          isEditable: false,
          spec: {
            url: 'https://raw.githubusercontent.com/scalekit-inc/docs/main/openapi/scalekit.json',
            
          },
          searchHotKey: "b",
          hideModels: true,
          hiddenClients: ['c','objc','ocaml','powershell','swift','unirest','cohttp'],
          hideDownloadButton: true,
          customCss: '',
          theme: 'alternate'
        },
      } as ScalarOptions,
    ],
  ],
  presets: [
    [
      'classic',
      {
        docs: {
          showLastUpdateTime: true,
          sidebarCollapsed: false,
          sidebarCollapsible: false,
          sidebarPath: './sidebars.ts',
          routeBasePath:'/'
        },
        blog: false,
        theme: {
          customCss: './src/css/custom.css',
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
    //         // Redocusaurus will automatically bundle your spec into a single file during the build
    //         spec: 'openapi/scalekit.swagger.yaml',
    //         route: '/api',
    //       }
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
    navbar: {
      title: 'Scalekit Docs',
      items: [
        //{ to: '/api-reference', label: 'API Reference', position: 'left' },
        {
          type: 'search',
          position: 'right',
        },
      ],
    },
    colorMode: {
      defaultMode: 'light',
      disableSwitch: true,
      respectPrefersColorScheme: false,
    },
    algolia: {
      appId: "7554BDRAJD",
      apiKey: "0a906499d09119c83fd6d0568e7f8517",
      indexName: "scalekit",
      contextualSearch: false,
      insights: true,
      searchPagePath: false
    },
    prism: {
      theme: prismThemes.vsLight
      // additionalLanguages: ['java', 'python', 'json', 'go'],
    },
  } satisfies Preset.ThemeConfig,
};

export default config;

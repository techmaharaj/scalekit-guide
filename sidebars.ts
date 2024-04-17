import type {SidebarsConfig} from '@docusaurus/plugin-content-docs';

/**
 * Creating a sidebar enables you to:
 - create an ordered group of docs
 - render a sidebar for each doc of that group
 - provide next/previous navigation

 The sidebars can be generated from the filesystem, or explicitly defined here.

 Create as many sidebars as you want.
 */
const sidebars: SidebarsConfig = {
  // By default, Docusaurus generates a sidebar from the docs folder structure
  //tutorialSidebar: [{type: 'autogenerated', dirName: '.'}],

  // But you can create a sidebar manually
  
  tutorialSidebar: [
    {
      type: 'category',
      label: 'Single Sign-on',
      items: ['single-sign-on/quickstart-sso', 'single-sign-on/quickstart-customer-portal', 'single-sign-on/testing-considerations', 'single-sign-on/golive-checklist']
    },
    {
      type: 'category',
      label: 'Integration Guides',
      items: ['integrations/saml', 'integrations/oidc', 'integrations/azure-ad-saml', 'integrations/okta-saml', 'integrations/onelogin-saml' ]
    },
  ],
  
};

export default sidebars;

import type { SidebarsConfig } from '@docusaurus/plugin-content-docs';

const sidebars: SidebarsConfig = {
  homeSidebar: [
    {
      type: 'doc',
      label: 'Home',
      id: 'home',
    },
    {
      type: 'category',
      label: 'Single Sign-on',
      className: 'sso_category',
      collapsible: false,
      collapsed: false,
      items: [
        {
          type: 'doc',
          label: 'Quickstart', // The link label
          id: 'single-sign-on/quickstart-sso', // The internal path
        },
        {
          type: 'doc',
          label: 'Integrate',
          id: 'admin-portal/quickstart-admin-portal',
        },

        {
          type: "doc",
          label: "Custom Domain",
          id: "admin-portal/custom-domain",
        },

        {
          type: 'doc',
          label: 'UX Customization',
          id: 'admin-portal/branding-theming',
        },
      ],
    },
    {
      type: 'link',
      label: 'Integrations',
      href: '/integrations',
    },
    {
      type: 'link',
      label: 'Guides',
      href: '/guides',
    },
    {
      type: 'doc',
      label: 'Errors',
      id: 'best-practices/error-handling',
    },
    {
      type: 'link',
      label: 'API', // The link label
      href: '/api-reference', // The internal path
    },
    'sdks',
    {
      type: 'doc',
      label: 'Concepts',
      id: 'manage-scalekit/glossary',
    },
    {
      type: 'doc',
      label: 'Launch Checklist',
      id: 'best-practices/launch-checklist',
    },
  ],
  integrationsSidebar: [
    {
      type: 'link',
      label: 'Back to Home',
      href: '/',
    },
    {
      type: 'doc',
      label: 'Overview',
      id: 'integrations/integrations',
    },
    {
      type: 'category',
      label: 'Integrations',
      items: [
        {
          type: 'doc',
          label: 'Okta SAML',
          id: 'integrations/okta-saml',
        },
        {
          type: 'doc',
          label: 'Azure AD SAML',
          id: 'integrations/azure-ad-saml',
        },
        {
          type: 'doc',
          label: 'OneLogin SAML',
          id: 'integrations/onelogin-saml',
        },
        {
          type: 'doc',
          label: 'JumpCloud SAML',
          id: 'integrations/jumpcloud-saml',
        },
        {
          type: 'doc',
          label: 'SAML',
          id: 'integrations/saml',
        },
        {
          type: 'doc',
          label: 'OIDC',
          id: 'integrations/oidc',
        },
      ],
    },
  ],
  guidesSidebar: [
    {
      type: 'link',
      label: 'Back to Home',
      href: '/',
    },
    {
      type: 'doc',
      label: 'Overview',
      id: 'guides/guides',
    },
    {
      type: 'category',
      label: 'Learn',
      items: [
        {
          type: 'doc',
          label: 'SSO Basics', // The link label
          id: 'best-practices/single-sign-on', // The internal path
        },
        {
          type: "doc",
          label: "Manage Client Secrets",
          id: "best-practices/manage-client-secrets",
        },
        {
          type: "doc",
          label: "Authorization URL",
          id: "best-practices/authorization-url",
        },
        {
          type: "doc",
          label: "Redirect URI",
          id: "best-practices/redirect-uri",
        },
        {
          type: "doc",
          label: "ID Token Claims",
          id: "best-practices/idtoken-claims",
        },
        {
          type: "doc",
          label: "Normalized User Profile",
          id: "best-practices/user-profile",
        },
        {
          type: "doc",
          label: "Handling IdP Initiated SSO",
          id: "best-practices/handling-idp-initiated",
        },
      ],
    },
    {
      type: 'doc',
      label: 'SAML Configurations',
      id: 'best-practices/advanced-saml',
    },
    {
      type: 'doc',
      label: 'Organizations',
      id: 'manage-scalekit/organization',
    },
  ],
};

export default sidebars;

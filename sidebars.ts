import type { SidebarsConfig } from "@docusaurus/plugin-content-docs";

/**
 * Creating a sidebar enables you to:
 - create an ordered group of docs
 - render a sidebar for each doc of that group
 - provide next/previous navigation

 The sidebars can be generated from the filesystem, or explicitly defined here.

 Create as many sidebars as you want.
 */
const sidebars: SidebarsConfig = {
  integrationsSidebar: [
    {
      type: "doc",
      label: "Integrations Overview",
      id: "integrations/integrations",
    },
    {
      type: "category",
      // link: {type: 'doc', id: 'integrations/integrations'},
      // link: {
      //   type: 'generated-index',
      //   title: 'Integration Guides',
      //   slug: '/integrations'
      // },
      label: "Identity Providers",
      collapsible: false,
      collapsed: false,
      items: [
        "integrations/okta-saml",
        "integrations/azure-ad-saml",
        "integrations/onelogin-saml",
        "integrations/jumpcloud-saml",
        "integrations/saml",
        "integrations/oidc",
      ],
    },
    {
      type: "category",
      // link: {type: 'doc', id: 'integrations/integrations'},
      label: "Auth Systems",
      className: "sso_category",
      items: [
        {
          type: "doc",
          label: "Firebase", // The link label
          id: "integrations/firebase", // The internal path
        },
        {
          type: "doc",
          label: "Auth0", // The link label
          id: "integrations/auth0", // The internal path
        },
      ],
    },
  ],
  apiReferenceSidebar: [
    {
      type: "link",
      href: "#introduction",
      label: "Introduction",
    },
    {
      type: "link",
      href: "#authentication",
      label: "Authentication",
    },
    {
      type: "link",
      href: "#error-handling",
      label: "Error Handling",
    },
    {
      type: "link",
      href: "#tag/Authentication",
      label: "Single Sign-on",
      className: "ApiCategory",
    },
    {
      type: "link",
      href: "#tag/Authentication/get/oauth/authorize", // The link label
      label: "Authorization URL", // The internal path
      className: "ApiCategoryList",
    },
    {
      type: "link",
      href: "#tag/Authentication/post/oauth/token", // The link label
      label: "Token URL", // The internal path
      className: "ApiCategoryList",
    },
    {
      type: "link",
      href: "#tag/Organization",
      label: "Organization",
      className: "ApiCategory",
    },
    {
      type: "link",
      href: "#tag/Organization/object",
      label: "The Organization object",
      className: "ApiCategoryList",
    },
    {
      type: "link",
      href: "#tag/Organization/get/api/v1/organizations",
      label: "List all Organizations",
      className: "ApiCategoryList",
    },
  ],
  tutorialSidebar: [
    {
      type: "category",
      label: "Single Sign-on",
      className: "sso_category",
      items: [
        {
          type: "doc",
          label: "Build", // The link label
          id: "single-sign-on/quickstart-sso", // The internal path
        },
        // {
        //   type: 'doc',
        //   label: 'Test',                     // The link label
        //   id: 'single-sign-on/testing-sso',  // The internal path
        // },
        {
          type: "doc",
          label: "Go-live", // The link label
          id: "single-sign-on/golive-checklist", // The internal path
        },
      ],
    },
    {
      type: "category",
      label: "Admin Portal",
      items: [
        {
          type: "doc",
          label: "Integrate",
          id: "admin-portal/quickstart-admin-portal",
        },

        {
          type: "doc",
          label: "Custom Domain",
          id: "admin-portal/custom-domain",
        },

        {
          type: "doc",
          label: "UX Customization",
          id: "admin-portal/branding-theming",
        },
      ],
    },
    {
      type: "category",
      label: "Learn",
      items: [
        {
          type: "doc",
          label: "SSO Basics", // The link label
          id: "best-practices/single-sign-on", // The internal path
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
        // {
        //   type: 'doc',
        //   label: 'SAML Configurations',
        //   id: 'best-practices/advanced-saml',
        // },
      ],
    },
    // {
    //   type: 'category',
    //   label: 'Troubleshoot',
    //   items: [
    //     {
    //       type: 'doc',
    //       label: 'Error Handling',
    //       id: 'best-practices/error-handling',
    //     },
    //     {
    //       type: 'doc',
    //       label: 'Troubleshoot SSO',
    //       id: 'best-practices/troubleshooting-sso',
    //     },
    //   ]
    // },
    {
      type: "category",
      label: "Manage Scalekit",
      items: ["manage-scalekit/organization", "manage-scalekit/glossary"],
    },

    {
      type: "category",
      label: "API & SDKs",
      items: [
        {
          type: "link",
          label: "API Reference", // The link label
          href: "/api-reference", // The internal path
        },
        // 'sdks'
      ],
    },
  ],
};

export default sidebars;

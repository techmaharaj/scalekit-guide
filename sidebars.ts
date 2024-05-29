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
      className: "ApiCategoryList get method",
    },
    {
      type: "link",
      href: "#tag/Authentication/post/oauth/token", // The link label
      label: "Token URL", // The internal path
      className: "ApiCategoryList post method",
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
      label: "List Organizations",
      className: "ApiCategoryList get method",
    },
    //<h4 id="tag/Organization/post/api/v1/organizations" class="headingWithStickyNavBar anchor">Create Organization</h4>
    {
      type: "link",
      href: "#tag/Organization/post/api/v1/organizations",
      label: "Create Organization",
      className: "ApiCategoryList post method",
    },
    //<h4 id="tag/Organization/get/api/v1/organizations/{id}" class="headingWithStickyNavBar anchor">Get Organization</h4>
    // {
    //   type: "link",
    //   href: "#tag/Organization/get/api/v1/organizations/{id}",
    //   label: "Get Organization",
    //   className: "ApiCategoryList get method",
    // },
    // //<h4 id="tag/Organization/patch/api/v1/organizations/{id}" class="headingWithStickyNavBar anchor">Update Organization</h4>
    // {
    //   type: "link",
    //   href: "#tag/Organization/patch/api/v1/organizations/{id}",
    //   label: "Update Organization",
    //   className: "ApiCategoryList patch method",
    // },
    // //<h4 id="tag/Organization/delete/api/v1/organizations/{id}" class="headingWithStickyNavBar anchor">Delete Organization</h4>
    // {
    //   type: "link",
    //   href: "#tag/Organization/delete/api/v1/organizations/{id}",
    //   label: "Delete Organization",
    //   className: "ApiCategoryList delete method",
    // },

    // // Admin Portal
    // //<h3 id="tag/Admin Portal" class="headingWithStickyNavBar anchor">Admin Portal</h3>
    // {
    //   type: "link",
    //   href: "#tag/Admin Portal",
    //   label: "Admin Portal",
    //   className: "ApiCategory",
    // },
    // //<h4 id="tag/Admin Portal/object" class="headingWithStickyNavBar anchor">The Admin Portal Object</h4>
    // {
    //   type: "link",
    //   href: "#tag/Admin Portal/object",
    //   label: "The Admin Portal object",
    //   className: "ApiCategoryList",
    // },
    // // <h4 id="tag/Admin Portal/get/api/v1/organizations/{id}/portal_links" class="headingWithStickyNavBar anchor">Get Portal link</h4>
    // {
    //   type: "link",
    //   href: "#tag/Admin Portal/get/api/v1/organizations/{id}/portal_links",
    //   label: "List Portal Links",
    //   className: "ApiCategoryList get method",
    // },
    // //<h4 id="tag/Admin Portal/put/api/v1/organizations/{id}/portal_links" class="headingWithStickyNavBar anchor">Generate Portal link</h4>
    // {
    //   type: "link",
    //   href: "#tag/Admin Portal/put/api/v1/organizations/{id}/portal_links",
    //   label: "Generate Portal Link",
    //   className: "ApiCategoryList put method",
    // },
    // //<h4 id="tag/Admin Portal/delete/api/v1/organizations/{id}/portal_links" class="headingWithStickyNavBar anchor">Delete Admin Portal link</h4>
    // {
    //   type: "link",
    //   href: "#tag/Admin Portal/delete/api/v1/organizations/{id}/portal_links",
    //   label: "Delete Portal Link",
    //   className: "ApiCategoryList delete method",
    // },
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

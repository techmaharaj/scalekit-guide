import type { SidebarsConfig } from "@docusaurus/plugin-content-docs";

const sidebars: SidebarsConfig = {
  homeSidebar: [
    {
      type: "doc",
      label: "Home",
      id: "home",
    },
    {
      type: "category",
      label: "Single Sign-on",
      className: "sso_category",
      collapsible: false,
      collapsed: false,
      items: [
        {
          type: "doc",
          label: "Quickstart", // The link label
          id: "single-sign-on/quickstart-sso", // The internal path
        },
        {
          type: "link",
          label: "Key Concepts",
          href: "/guides",
        },
        {
          type: "doc",
          label: "Admin Portal",
          id: "single-sign-on/quickstart-admin-portal",
        },
        {
          type: "doc",
          label: "Customization",
          id: "single-sign-on/domain-and-theme-customization",
        },
        {
          type: "doc",
          label: "Launch Checklist",
          id: "best-practices/launch-checklist",
        },
      ],
    },
    {
      type: "link",
      label: "Integrations",
      href: "/integrations",
    },
    {
      type: "link",
      label: "Guides",
      href: "/guides",
    },
    {
      type: "doc",
      label: "Errors",
      id: "best-practices/error-handling",
    },
    {
      type: "link",
      label: "API", // The link label
      href: "/apis", // The internal path
    },
    "sdks",
    {
      type: "doc",
      label: "Glossary",
      id: "manage-scalekit/glossary",
    },
  ],
  integrationsSidebar: [
    {
      type: "link",
      label: "Back to Home",
      href: "/",
    },
    {
      type: "doc",
      label: "Overview",
      id: "integrations/integrations",
    },
    {
      type: "category",
      label: "Identity Providers",
      items: [
        {
          type: "doc",
          label: "Okta SAML",
          id: "integrations/okta-saml",
        },
        {
          type: "doc",
          label: "Azure AD SAML",
          id: "integrations/azure-ad-saml",
        },
        {
          type: "doc",
          label: "OneLogin SAML",
          id: "integrations/onelogin-saml",
        },
        {
          type: "doc",
          label: "JumpCloud SAML",
          id: "integrations/jumpcloud-saml",
        },
        {
          type: "doc",
          label: "SAML",
          id: "integrations/saml",
        },
        {
          type: "doc",
          label: "OIDC",
          id: "integrations/oidc",
        },
      ],
    },
    {
      type: "category",
      label: "Auth Systems",
      items: [
        {
          type: "doc",
          label: "Auth0",
          id: "integrations/auth0",
        },
        {
          type: "doc",
          label: "Firebase",
          id: "integrations/firebase",
        },
      ],
    },
  ],
  guidesSidebar: [
    {
      type: "link",
      label: "Back to Home",
      href: "/",
    },
    {
      type: "doc",
      label: "Explore",
      id: "guides/index",
    },
    {
      type: "category",
      label: "Key Concepts",
      items: [
        {
          type: "link",
          label: "Overview of SSO",
          href: "/guides/overview-of-sso",
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
          label: "Organizations",
          id: "manage-scalekit/organization",
        },
      ],
    },
  ],
};

export default sidebars;

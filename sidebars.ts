import type { SidebarsConfig } from "@docusaurus/plugin-content-docs";
import { generateDocObjects } from "./src/utils/config-helper-fns";

const sidebars: SidebarsConfig = {
  homeSidebar: [
    {
      type: "category",
      label: "Single Sign-on",
      className: "sso_category",
      collapsible: false,
      collapsed: false,
      link: {
        type: "doc",
        id: "home",
      },
      items: [
        {
          type: "doc",
          label: "Quickstart", // The link label
          id: "single-sign-on/quickstart-sso", // The internal path
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
      type: "category",
      label: "How-To Guides",
      collapsible: false,
      collapsed: false,
      link: {
        type: "doc",
        id: "guides/index",
      },
      items: [
        {
          type: "category",
          label: "Setup SSO",
          collapsed: true,
          collapsible: true,
          items: [
            {
              type: "doc",
              label: "Build Login Page",
              id: "guides/setup-sso/build-login-page",
            },
            {
              type: "doc",
              label: "Handle User Profile",
              id: "guides/setup-sso/handle-user-profile",
            },
            {
              type: "doc",
              label: "Handle Raw Attributes from IdP",
              id: "guides/setup-sso/handle-raw-idp-attributes",
            },
            {
              type: "doc",
              label: "Customize User Attributes",
              id: "guides/setup-sso/customize-user-attributes",
            },
            {
              type: "doc",
              label: "Customize Admin Portal Branding",
              id: "guides/setup-sso/customize-admin-portal-branding",
            },
            {
              type: "doc",
              label: "Implement IdP initated SSO",
              id: "guides/setup-sso/implement-idp-initiated-sso",
            },
            {
              type: "doc",
              label: "Support Advanced SAML Settings",
              id: "guides/setup-sso/support-advanced-saml-settings",
            },
          ],
        },
        {
          type: "category",
          label: "Integrate with your Auth System",
          collapsed: true,
          collapsible: true,
          items: [
            {
              type: "doc",
              label: "In-House Authentication",
              id: "guides/integrate-with-your-auth-system/inhouse-authentication",
            },
            {
              type: "doc",
              label: "Auth0",
              id: "guides/integrate-with-your-auth-system/auth0",
            },
            {
              type: "doc",
              label: "Firebase",
              id: "guides/integrate-with-your-auth-system/firebase",
            },
          ],
        },
        {
          type: "category",
          label: "Test your integration",
          collapsed: true,
          collapsible: true,
          items: [
            {
              type: "doc",
              label: "Using Mock IdP",
              id: "guides/test-your-integration/using-mock-idp",
            },
            {
              type: "doc",
              label: "Using Okta",
              id: "guides/test-your-integration/using-okta",
            },
          ],
        },
      ],
    },
    {
      type: "category",
      label: "Key Concepts",
      collapsible: true,
      collapsed: true,
      items: [
        {
          type: "doc",
          label: "SSO Basics",
          id: "single-sign-on/key-concepts/sso-basics",
        },
        {
          type: "doc",
          label: "Authorization URL",
          id: "single-sign-on/key-concepts/authorization-url",
        },
        {
          type: "doc",
          label: "Redirect URI",
          id: "single-sign-on/key-concepts/redirect-uri",
        },
        {
          type: "doc",
          label: "ID Token Claims",
          id: "single-sign-on/key-concepts/idtoken-claims",
        },
        {
          type: "doc",
          label: "Normalized User Profile",
          id: "single-sign-on/key-concepts/user-profile",
        },
      ],
    },
  ],
  integrationsSidebar: [
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
  ],
};

export default sidebars;

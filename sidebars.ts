import type { SidebarsConfig } from "@docusaurus/plugin-content-docs";
import { generateDocObjects } from "./src/utils/config-helper-fns";

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
      items: [
        {
          type: "doc",
          label: "Overview",
          id: "guides/index",
        },
        {
          type: "category",
          label: "Implement Scalekit in my existing Auth System",
          collapsed: true,
          collapsible: true,
          items: [
            "guides/auth0",
            "guides/firebase",
            {
              type: "doc",
              label: "NextJS",
              id: "guides/placeholder",
            },
            {
              type: "doc",
              label: "Mobile App",
              id: "guides/placeholder",
            },
          ],
        },
        {
          type: "category",
          label: "Configure Advanced Single Sign On settings ",
          collapsed: true,
          collapsible: true,
          items: [
            {
              type: "doc",
              label: "Custom Attributes",
              id: "guides/placeholder",
            },
            {
              type: "doc",
              label: "IdP initiated SSO",
              id: "guides/placeholder",
            },
            {
              type: "doc",
              label: "Encrypted Assertions in SAML",
              id: "guides/placeholder",
            },
          ],
        },
        {
          type: "category",
          label: "Manage Authentication",
          collapsed: true,
          collapsible: true,
          items: [
            {
              type: "doc",
              label: "Configure Webhooks",
              id: "guides/placeholder",
            },
            {
              type: "doc",
              label: "Manage Client Secrets",
              id: "guides/placeholder",
            },
            {
              type: "doc",
              label: "Accept IdP Raw Attributes",
              id: "guides/placeholder",
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
      type: "doc",
      label: "Integrations Overview",
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
  ],
};

export default sidebars;

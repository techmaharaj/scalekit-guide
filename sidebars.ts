import Link from '@docusaurus/Link';
import type {SidebarsConfig} from '@docusaurus/plugin-content-docs';

export default {
  homeSidebar: [
    { type: "doc", id: "home" },
    {
      type: 'category',
      label: 'Introduction',
      collapsible: 'true',
      items: [
        {
          type: 'doc',
          id: 'introduction/strategic-role-of-authentication',
        },
        {
          type: 'doc',
          id: 'introduction/challenges-in-b2b-environment',
        },
      ],
    },
    {
      type: 'category',
      label: 'Building Blocks of B2B Authentication',
      collapsible: 'true',
      collapsed: 'true',
      items: [
        {
          type: 'doc',
          id: 'building-blocks-of-b2b-authentication/architecture-of-b2b-applications',
        },
        {
          type: 'doc',
          id: 'building-blocks-of-b2b-authentication/multi-tenancy',
        },
        {
          type: 'doc',
          id: 'building-blocks-of-b2b-authentication/organization-based-data-architecture',
        },
        {
          type: 'doc',
          id: 'building-blocks-of-b2b-authentication/planning-b2b-authentication',
        },
        {
          type: 'doc',
          id: 'building-blocks-of-b2b-authentication/token-management-in-authentication',
        },
      ],
    },
    {
      type: 'category',
      label: 'Designing User Experiences',
      collapsible: 'true',
      collapsed: 'true',
      items: [
        {
          type: 'doc',
          id: 'designing-user-experiences/login-experiences',
        },
        {
          type: 'doc',
          id: 'designing-user-experiences/multi-product',
        },
      ],
    },
    {
      type: 'category',
      label: 'Authentication Methods in B2B Applications',
      collapsible: 'true',
      collapsed: 'true',
      items: [
        {
          type: 'doc',
          id: 'authentication-methods-in-b2b-apps/index',
        },
      ],
    },
    {
      type: 'category',
      label: 'Multi-factor Authentication',
      collapsible: 'true',
      collapsed: 'true',
      items: [
        {
          type: 'doc',
          id: 'multi-factor-authentication/types-of-multi-factor-authentication',
        },
        {
          type: 'doc',
          id: 'multi-factor-authentication/implementing-multi-factor-authentication-in-b2b-apps',
        },
      ],
    },
    {
      type: 'category',
      label: 'Passwordless Authentication',
      collapsible: 'true',
      collapsed: 'true',
      items: [
        {
          type: 'doc',
          id: 'passwordless-authentication/magic-links',
        },
        {
          type: 'doc',
          id: 'passwordless-authentication/passkeys',
        },
        {
          type: 'doc',
          id: 'passwordless-authentication/one-time-passcodes',
        },
        {
          type: 'doc',
          id: 'passwordless-authentication/authenticator-apps',
        },
        {
          type: 'doc',
          id: 'passwordless-authentication/implementing-passwordless-in-b2b-apps',
        },
      ],
    },
    {
      type: 'category',
      label: 'OAuth 2.0',
      collapsible: 'true',
      collapsed: 'true',
      items: [
        {
          type: 'doc',
          id: 'oauth2/oauth-fundamentals',
        },
        {
          type: 'doc',
          id: 'oauth2/tokens-in-oauth2',
        },
        {
          type: 'doc',
          id: 'oauth2/scopes-and-claims',
        },
        {
          type: 'doc',
          id: 'oauth2/openid-connect',
        },
      ],
    },
    {
      type: 'category',
      label: 'Single Sign-On',
      collapsible: 'true',
      collapsed: 'true',
      items: [
        {
          type: 'doc',
          id: 'single-sign-on/sso-overview',
        },
        {
          type: 'doc',
          id: 'single-sign-on/saml-based-sso',
        },
        {
          type: 'doc',
          id: 'single-sign-on/oidc-based-sso',
        },
        {
          type: 'doc',
          id: 'single-sign-on/enterprise-sso-requirements',
        },
      ],
    },
    {
      type: 'category',
      label: 'Social Logins',
      collapsible: 'true',
      collapsed: 'true',
      items: [
        {
          type: 'doc',
          id: 'social-logins/how-social-login-works',
        },
        {
          type: 'doc',
          id: 'social-logins/why-implement-social-logins',
        },
      ],
    },
    {
      type: 'category',
      label: 'API Authentication',
      collapsible: 'true',
      collapsed: 'true',
      items: [
        {
          type: 'doc',
          id: 'api-authentication/index',
        },
      ],
    },
    {
      type: 'category',
      label: 'User Management',
      collapsible: 'true',
      collapsed: 'true',
      items: [
        {
          type: 'doc',
          id: 'user-management/provisioning-and-deprovisioning',
        },
        {
          type: 'doc',
          id: 'user-management/automation-with-directory-sync',
        },
        {
          type: 'doc',
          id: 'user-management/jit-provisioning',
        },
      ],
    },
    {
      type: 'category',
      label: 'Access Management',
      collapsible: 'true',
      collapsed: 'true',
      items: [
        {
          type: 'doc',
          id: 'access-management/permissions-roles-groups',
        },
        {
          type: 'doc',
          id: 'access-management/rbac',
        },
      ],
    },
    {
      type: 'category',
      label: 'Security',
      collapsible: 'true',
      collapsed: 'true',
      items: [
        {
          type: 'doc',
          id: 'security/application-security',
        },
        {
          type: 'doc',
          id: 'security/prevent-vulnerability-attacks',
        },
      ],
    },
    {
      type: 'category',
      label: 'Scaling',
      collapsible: 'true',
      collapsed: 'true',
      items: [
        {
          type: 'doc',
          id: 'scaling/index',
        },
      ],
    },
    {
      type: 'category',
      label: 'Auditing and Monitoring',
      collapsible: 'true',
      collapsed: 'true',
      items: [
        {
          type: 'doc',
          id: 'auditing-and-monitoring/access-logs',
        },
        {
          type: 'doc',
          id: 'auditing-and-monitoring/user-activity-logs',
        },
      ],
    },
    {
      type: 'category',
      label: 'Compliance and Regulatory Considerations',
      collapsible: 'true',
      collapsed: 'true',
      items: [
        {
          type: 'doc',
          id: 'compliance/index',
        },
      ],
    },
    {
      type: 'category',
      label: 'External References',
      collapsible: 'true',
      collapsed: 'true',
      items: [
        {
          type: 'doc',
          id: 'external-references/index',
        },
      ],
    },
  ],

  guidesSidebar: [
   
  ],
  integrationsSidebar: [
   
  ],
};
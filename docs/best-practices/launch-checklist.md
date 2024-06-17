---
sidebar_position: 1
---

# Go-live Checklist

<Subtitle>
Check off these recommended steps before launching your app in Production
</Subtitle>

As you get ready to deploy your Single Sign-On (SSO) implementation to production, it's important to double-check that everything is properly configured for optimal security and a seamless user experience. The checklist below outlines recommended steps to ensure your SSO integration is robust, efficient, and maintainable in a live environment. While not all of these steps may be strictly required for basic functionality, thoroughly working through this list will help you launch with confidence and avoid potential issues down the road.

<!-- <label for="env_variables"><LabeledCheckbox id="env_variables"/> **Use appropriate environment variables**</label> -->

<LabeledCheckbox id="env_variables"> **Use appropriate environment variables** </LabeledCheckbox>

    Switch from development to production credentials, including the Client ID, Client Secret, and Environment URL. Your .env file should reflect these production values, distinct from your test settings.

    Sample `.env` file is below:

```typescript title=".env"
SCALEKIT_ENV_URL = "https://acmecorp.scalekit.com";
SCALEKIT_CLIENT_ID = "12wedfgt567898uyg";
SCALEKIT_CLIENT_SECRET = "b6264fca-8adf-457f-a94f-5a4b0d1ca2b9";
```

<LabeledCheckbox id="client_secrets"> **Secure the Client Secret**</LabeledCheckbox>

    Your client secret is akin to a key to your application. Secure it with the utmost care. Follow our [Manage Client Secrets](/docs/best-practices/manage-client-secrets.md) guide for industry-standard practices in safeguarding this sensitive information.

<LabeledCheckbox id="redirect_uri"> **Verify Redirect URI Configuration** </LabeledCheckbox>

    Double-check your Redirect URI settings in the production environment to ensure they point to the correct endpoints. For guidelines on valid configurations, visit our Redirect URI configuration [here](/docs/best-practices/redirect-uri.md).

<LabeledCheckbox id="branding_theming"> **Finalize Branding & Theming**</LabeledCheckbox>

    For a consistent and professional user experience, confirm your branding—logos, accent colors, etc.—is applied to the SSO authentication and admin interface.

<LabeledCheckbox id="portal_url"> **Review Admin Portal URL**</LabeledCheckbox>

    Customize the admin portal URL to match your domain (https<nolink />://sso.yourdomain.com) for a seamless brand experience. Remember to update this in your .env file post-CNAME configuration.

<LabeledCheckbox id="error_handling"> **Graceful Error Handling**</LabeledCheckbox>

    Test your integration thoroughly across all possible edge cases, including incomplete, invalid, or duplicate data submissions. Review our [error handling documentation](/docs/guides/error-handling.mdx) to ensure your application manages errors elegantly and informs users accordingly.

Completing these steps is pivotal to a successful launch. While our SDK covers many bases, vigilance is the key to a secure and user-friendly SSO implementation. Good luck with your launch!

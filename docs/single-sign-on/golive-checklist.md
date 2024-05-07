---
sidebar_position: 1
---
import Subtitle from '@site/src/components/custom';
import LabeledCheckbox from '@site/src/components/checkbox';

# Go-live Checklist
<Subtitle>Use this checklist to ensure a smooth transition when taking your integration live.</Subtitle>

As you prepare to take your Single Sign-On (SSO) implementation live, it’s crucial to ensure every aspect is tuned for a secure and smooth production environment. Below is a checklist designed to guide developers through the essential steps of going live. 

:::tip Track your progress
As you complete each item, feel free to check off the appropriate box. The status of each checklist item is stored in your browser’s cache and you can refer back to this page to track your go-live progress.
:::
<!-- <label for="env_variables"><LabeledCheckbox id="env_variables"/> **Use appropriate environment variables**</label> -->
<LabeledCheckbox id="env_variables"> **Use appropriate environment variables**</LabeledCheckbox>

    Switch from development to production credentials, including the Client ID, Client Secret, and Environment URL. Your .env file should reflect these production values, distinct from your test settings. Sample .env file is below:

    ```typescript title=".env"
    SCALEKIT_ENV_URL="https://acmecorp.scalekit.com"
    SCALEKIT_CLIENT_ID="12wedfgt567898uyg"
    SCALEKIT_CLIENT_SECRET="b6264fca-8adf-457f-a94f-5a4b0d1ca2b9"
    ```

<LabeledCheckbox id="client_secrets"> **Secure the Client Secret**</LabeledCheckbox>

    Your client secret is akin to a key to your application. Secure it with the utmost care. Follow our [Manage Client Secrets](/docs/best-practices/manage-client-secrets.md) guide for industry-standard practices in safeguarding this sensitive information. 

<LabeledCheckbox id="redirect_uri"> **Verify Redirect URI Configuration**</LabeledCheckbox>
    
    Double-check your Redirect URI settings in the production environment to ensure they point to the correct endpoints. For guidelines on valid configurations, visit our Redirect URI configuration [here](/docs/best-practices/redirect-uri.md).
  
<LabeledCheckbox id="branding_theming"> **Finalize Branding & Theming**</LabeledCheckbox>

    For a consistent and professional user experience, confirm your branding—logos, accent colors, etc.—is applied to the SSO authentication and admin interface.

<LabeledCheckbox id="portal_url"> **Review Admin Portal URL**</LabeledCheckbox>
    
    Customize the admin portal URL to match your domain (https<nolink />://sso.yourdomain.com) for a seamless brand experience. Remember to update this in your .env file post-CNAME configuration. 

<LabeledCheckbox id="error_handling"> **Graceful Error Handling**</LabeledCheckbox>
    
    Test your integration thoroughly across all possible edge cases, including incomplete, invalid, or duplicate data submissions. Review our [error handling documentation](/docs/best-practices/error-handling.md) to ensure your application manages errors elegantly and informs users accordingly.


Completing these steps is pivotal to a successful launch. While our SDK covers many bases, vigilance is the key to a secure and user-friendly SSO implementation. Good luck with your launch!

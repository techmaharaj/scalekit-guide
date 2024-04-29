---
sidebar_position: 1
---

# Go-live Checklist

As you prepare to take your Single Sign-On (SSO) implementation live, it’s crucial to ensure every aspect is tuned for a secure and smooth production environment. Below is a checklist designed to guide developers through the essential steps: 

1. **Use appropriate environment variables**

    Switch from development to production credentials, including the Client ID, Client Secret, and Environment URL. Your .env file should reflect these production values, distinct from your test settings. Sample .env file is below:

    ```typescript .env
    SCALEKIT_ENV_URL="https://acmecorp.scalekit.com"
    SCALEKIT_CLIENT_ID="12wedfgt567898uyg"
    SCALEKIT_CLIENT_SECRET="b6264fca-8adf-457f-a94f-5a4b0d1ca2b9"
    ```

2. **Secure the Client Secret**

    Your client secret is akin to a key to your application. Secure it with the utmost care. Follow our [Manage Client Secrets](/docs/best-practices/manage-client-secrets.md) guide for industry-standard practices in safeguarding this sensitive information. 

3. **Verify Redirect URI Configuration**
    
    Double-check your Redirect URI settings in the production environment to ensure they point to the correct endpoints. For guidelines on valid configurations, visit our Redirect URI configuration [here](/docs/best-practices/redirect-uri.md).
  
4. **Finalize Branding & Theming**

    For a consistent and professional user experience, confirm your branding—logos, accent colors, etc.—is applied to the SSO authentication and admin interface.

5. **Review Customer Portal URL**
    
    Customize the admin portal URL to match your domain (https<nolink />://sso.yourdomain.com) for a seamless brand experience. Remember to update this in your .env file post-CNAME configuration. 

6. **Graceful Error Handling**
    
    Test your integration thoroughly across all possible edge cases, including incomplete, invalid, or duplicate data submissions. Review our [error handling documentation](/docs/best-practices/error-handling.md) to ensure your application manages errors elegantly and informs users accordingly.


Completing these steps is pivotal to a successful launch. While our SDK covers many bases, vigilance is the key to a secure and user-friendly SSO implementation. Good luck with your launch!

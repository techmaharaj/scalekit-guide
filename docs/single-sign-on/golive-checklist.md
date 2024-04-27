---
sidebar_position: 1
---

# Go-live Checklist

As a developer, you should strongly consider checking off all the items in the below guide before going live. Not all of these checklist items might apply to you, if you are already using our SDK but going through items is strongly recommended. 

1. **Use appropriate environment variables**

    Before going to production, ensure you are using the production environment's Client ID, Client Secret and Environment URL values. Sample .env file looks as below

    ```typescript .env
    SCALEKIT_ENV_URL="https://acmecorp.scalekit.com"
    SCALEKIT_CLIENT_ID="12wedfgt567898uyg"
    SCALEKIT_CLIENT_SECRET="b6264fca-8adf-457f-a94f-5a4b0d1ca2b9"
    ```

2. **Protect the Client Secret securely**

    Make sure that you have take all measures necessary to keep the client secret information secure. Follow our [Manage Client Secrets](/docs/best-practices/manage-client-secrets.md) guide to learn more on the best practices to protect your client secrets. 

3. **Review your Redirect URI configuration**
    
    Ensure you have configured appropriate Redirect URI endpoints in your prod environment settings. You can read more about the valid Redirect URI configuration [here](/docs/best-practices/redirect-uri.md).
  
4. **Review your Branding & Theming configuration**

    To offer a fully branded experience to your customers, you can choose to use your own logo and accent colors on the customer portal. Feel free to review or configure this before you go-live.

5. **Review your Customer Portal URL configuration**
    
    Self-serve customer portals that are shared with your customers use the environment URL (https<nolink />://*.scalekit.com) pattern. Consider implementing CNAME to customize this to your domain (https<nolink />://sso.yourdomain.com) so that your customers see your branding information through. 

    :::tip
    After you configure Custom Domain for your environment url, don't forget to update your environment URL configuration in the .env file.
    :::

6. **Handle Errors Gracefully**
    
    Ensure you have tested the integration for all possible test cases including incomplete data, invalid data, and duplicate data. Please go through the list of [possible error scenarios here](/docs/best-practices/error-handling.md) and ensure you have handled these cases appropriately.


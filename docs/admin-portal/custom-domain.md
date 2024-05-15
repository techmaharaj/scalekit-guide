
# Custom Domain (CNAME)

<Subtitle>Host Admin Portal on your own domain</Subtitle>

## Introduction

By default, all your environments are accessible via a unique endpoint URL hosted at scalekit.com domain. For example <SimpleCode>https:<nolink />//yoursaas.scalekit.com</SimpleCode>.

But, if you would like to offer a deeply customized experience to your customers and show your branding everywhere, we offer you an option to customize this url to be hosted on your domain via CNAME configuration. For example: <SimpleCode>https:<nolink />//sso.yoursaas.com</SimpleCode>

## Visibility of Custom Domain

1. **Stand alone Admin Portal**
When your customers visit the Self serve Admin Portal, they will see the URL of your environment in the browser's address bar.

2. **SSO Redirects**
When your customers login with SSO via SAML or OIDC, they may see the scalekit.com in their browser's address bar as part of redirection to their Identity Provider.

:::info

- The ability to configure CNAME is only available for production environments.

- We will automatically configure the SSL certificate for the custom domain after you successfully configure CNAME records in your domain registrar.

- After the successful configuration of CNAME for the production environment, don't forget to use this new CNAME url as base URL for the production environment.

:::

## How to configure CNAME

If you are interested to configure CNAME for your production environment, please reach out to support@scalekit.com

import {SimpleCode} from '@site/src/components/custom';

# Redirect URI

As part of integration between your application and Scalekit, redirect URI is the endpoint URL to which the user is redirected to after completing the authentication flow in the Identity Provider. 

For successful integration between B2B product and Scalekit, there has to be at least one redirect URI configured per environment. Depending on your use case, you may choose to configure more than one redirect URI, but at least one of these must be marked as default. 

At the time of initiating the authentication flow for a user in B2B product via SSO, redirect_uri is one of the required parameters and this redirect_uri should match exactly with one of the redirect URIs configured in the Scalekit dashboard.  

:::info

During the IdP initiated SAML SSO flow, the redirect_uri that is marked as default will be used to redirect the user to your application. 

:::

**Validation Rules for Redirect URI in both Prod and Dev Environments**

- Redirect URIs can have a maximum of 256 characters
- Redirect URI can contain query component which will be retained while adding additional query parameters after the completion of authentication flow.
- Redirect URI cannot contain fragment component.

**Additional Validation Rules for Redirect URI in Dev Environment**

- `localhost` URIs are supported in Dev Environment only
- Redirect URIs must begin with one of the two schemes `http`  or `https`
    - `http`  scheme is only supported for `localhost`  as the host name
- Redirect URIs **can** contain wildcard character provided all the rules mentioned below regarding the usage of wildcard character in Redirect URI are followed.

**Additional Validation Rules for Redirect URI in Prod Environment**

- Redirect URIs must begin with `https`
- Redirect URIs cannot have `localhost` URIs
- Redirect URIs **cannot** contain wildcard character

**Wildcard Redirect URIs**

According to the OAuth 2.0 specification ([section 3.1.2 of RFC 6749](https://tools.ietf.org/html/rfc6749#section-3.1.2)), a redirection endpoint URI must be an absolute URI. But, to make development and testing easier - this restriction is slightly relaxed in the DEV environments. 

:::warning

In Production enironments, Redirect URIs cannot contain Wildcard characters.

:::

In the DEV environments, the wildcard character `*`  can be used to configure the redirect URIs in the dashboard. However, the following rules will apply while allowing the wildcard character. 

- Wildcard character as a root level domain is **not** allowed (<SimpleCode>https://*.com</SimpleCode> is not allowed).
- Only **one** wildcard is allowed per callback (`https://*.*.acmecorp.com` is not allowed).
- The wildcard **must** be located in a subdomain within the hostname component. If URI has multiple subdomains, wildcard **must** be part of the subdomain that is farthest from the hostname component
    - For example, `https://xyz.*.com`  is not allowed
    - `https://*.acmecorp.com`  is allowed
    - `https://saml-auth-*.acmecorp.com`  is also allowed
- A URL with a valid wildcard **will** match only one subdomain in it’s place.
    - For example, `https://*.acmecorp.com/`  will match `https://auth.acmecorp.com` and not match `https://saml.auth.acmecorp.com`
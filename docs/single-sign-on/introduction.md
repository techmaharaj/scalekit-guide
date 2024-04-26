---
slug: /
---
# Introduction to Single Sign-on

Single Sign-On (SSO) streamlines user access by enabling a single authentication event to grant access to multiple applications with the same credentials. For example, logging into one Google service, such as Gmail, automatically authenticates you to YouTube, Google Drive, and other Google platforms.

This unified approach also applies to logging out—signing out of one service automatically logs you out from all associated services. By reducing the need for multiple credentials, SSO not only simplifies the login process but also enhances security by minimizing the instances in which credentials are entered and potentially exposed.

Furthermore, this integrated login and logout mechanism enhances user convenience, boosts productivity, and reduces the risks associated with password fatigue and reuse. Crucially, SSO ensures compliance with rigorous security and compliance standards, establishing it as an essential element in the architecture of modern B2B and SaaS applications.

## How Single Sign-On works

SSO is compatible with any Identity Provider that supports SAML (Security Assertion Markup Language) or OIDC (OpenID Connect) protocols, adhering to the OAuth 2.0 framework. This setup abstracts the complex authentication interactions between various IdPs, providing a streamlined user authentication process across different platforms.

In SSO, a central domain authenticates the user and then shares this authenticated session with other domains. Although sharing mechanisms can vary between SSO protocols, they typically involve generating a signed JSON Web Token (JWT), which is encrypted and contains all necessary user identification information. This token, secured from tampering by its signature, is passed to the client and can be used by any domain within the network to verify user identity through redirects or direct token transmission.

### SAML

Security Assertion Markup Language (SAML) protocol is widely used in SSO implementation. SAML exchanges authorization and authentication data in XML format; the main parts of this exchange are the user, the identity provider, and the service provider. With SAML:

1. A user requests a resource from the service provider.
2. The service provider checks with the identity provider to see if the user should have access to the resource.
3. The identity provider verifies the user's identity, and if valid, asserts back to the service provider that the user should have access.

### OIDC

OpenID Connect (OIDC) is an authentication protocol commonly used in consumer-facing SSO implementations. The OIDC protocol handles authentication through JSON Web Tokens and a central identity provider. With OIDC:

1. A user requests access to an application
2. The application redirects the user to the identity provider for authentication
3. The identity provider verifies the user, and if successful, prompts the user to grant data access to the application
4. If access is granted, the identity provider generates an ID Token, which contains user identity information that the application can consume
5. The identity provider returns the user to the application

## Service Provider initiated SSO

For Service-Provider-initiated implementations, Scalekit is the SSO Service Provider (SP). When a user logs into a B2B, SaaS application:

1. The application presents the user with an external Identity Provider (IdP)
2. The user selects the IdP to authenticate with and logs in
3. Upon successful authentication, the user is returned to the application with an active session

## Identity Provider initiated SSO

For Identity Provider initiated SSO, an external Identity Provider (IdP) is the SSO provider. When a user logs in to an application:

1. The application redirects the user to the identity provider
2. The identity provider performs authentication
3. Upon successful authentication, the user is returned to the application

For B2B, SaaS applications, SSO can simplify packaging your application for enterprise consumption. With Scalekit, your applications can support common enterprise federation scenarios SAML, OIDC, Active Directory (AD). This allows your enterprise customers to log in with their preferred identity provider technologies.

Now, lets look at a [Quick Start](/docs/single-sign-on/quickstart-sso.md) guide of SSO with Scalekit.
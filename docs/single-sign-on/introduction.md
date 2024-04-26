---
slug: /
---
# Introduction to Single Sign-on

Single Sign-On (SSO) streamlines user access by enabling a single authentication event to grant access to multiple applications with the same credentials. For example, logging into one Google service, such as Gmail, automatically authenticates you to YouTube, Google Drive, and other Google platforms. 

There are two key benefits to the users and organizations with secure single sign-on implementation.
- User can seamlessly access multiple applications using only one set of credentials. 
- User credentials are managed only in one central identity authentication provider. So, in a business context, this centralized identity & authentication enables Business Admins to configure and maange the authentication policies for all their users from their Identity Provider. 

Furthermore, this integrated SSO mechanism enhances user convenience, boosts productivity, and reduces the risks associated with password fatigue and reuse. Because of the security & administration benefits the single sign-on offers, most (if not all) enterprise organizations prefer to purchase and use business applications that can seamlessly integrate with their Identity Provider. 

## How Single Sign-On works

As a B2B application developer, you must be wondering how to integrate with these myriad Identity Providers that your enterprise customers might be using to offer Single Sign-on experience for your users. 

Fundamentally, Single Sign-on works by exchanging user information in a pre-determined format between two trusted parties, your application and your customer's Identity Provider. Most of these interactions happen via the browser as some of the steps need user intervention too. 

<!-- <Single Sign-on Image>
<Application <==> Identity Provider> -->

To ensure secure and seamless exchange of user information between your application and your customer's Identity Provider, most Identity Providers support either or both of the two protocols: Secure Assertion Markup Language (SAML) or OpenID Connect (OIDC). The objective of both these protocols is the same: Allow secure user information exchange between Service Provider (Your Application) and Identity Provider (Your customer's Authentication System). They differ in how these systems trust each other, communicate with each other and exchange user information.

Let's look at these protocols at a high level below:

## SAML

SAML 2.0 (Secure Assertion Markup Language) has been in use since 2005 and is also most widely implemented protocol in the wild. SAML exchanges user information using XML files via HTTPS or SOAP. 

But, before the user information is exchanged between these two parties, first they need to establish trust between them. This is done by exchanging information about each other as part of SAML Configuration parameters like ACS URL (Assetion Consumer Service URL), Entity ID, X.509 Certificates etc. 

Once the trust has been established, all subsequent user information requests can happen either by your application requesting for a user's information (Service Provider initiated Login flow) or by the Identity Provider directly giving you user details via the pre-configured ACS URL and request you to grant user access to your product (Identity Provider initiated Login flow) 

### Service Provider initiated SSO

In case of SP initiated SSO, 
1. User tries to access your application. You identify that this users credentials need to be verified by their Identity Provider. 
2. Your application requests the user's Identity Provider for the user's information. 
3. Identity Provider authenticates the user and sends the users details as Assertions to your application.
4. You will validate the assertions, retrieve the user information from those assertions and if everything is valid, you will allow the user inside your application.

As you can imagine, in this workflow, the user login behaviour starts from your application and thats why this is termed as SP initiated SSO.


### Identity Provider initiated SSO

In case of Identity Provider initiated SSO, 
1. User logs into their Identity Provider portal and clicks on your application tile in their IdP portal.
2. Identity Provider sends the user details as Assertions to your application.
3. You will validate the assertions, retrieve the user information from those assertions and if everything is valid, you will allow the user inside your application.

Because the user login behaviour starts from the Identity Provider (and not from your application), this flow is called as Idp initiated SSO.

#### Risks with IdP initiated SSO
IdP initiated SSO is susceptible for common security attacks like Man In the Middle attack, Stolen Assertion attack or Assertion Replay attack etc. While it is possible to prevent these vulnerabilities by strictly implementing the SEction 4.1.5 of SAML 2.0 profile specification, it is always recommended to use SP initiated SSO as much as possible.

## OIDC

OpenID Connect (OIDC) is an authentication protocol based on top of OAuth 2.0 to simplify the user information exchange process between Relying Party (Your Application) and the OpenID Provider (your customer's Identity Provider). The OIDC protocol exchanges user information via signed Json Web Tokens (JWT) over HTTPS. Because of the simplified nature of handling JWTs, it is often used in modern web applications, native desktop clients and mobile applications. With the latest extensions to the OIDC procotol like PKCE (Proof Key of Code Exchange) and DPoP (Demonstrating Proof of Possession), the overall security of user exchange information is increasing.

In it's current format, OIDC only supports SP initiated Login. In this flow: 

1. User tries to access your application. You identify that this users credentials need to be verified by their Identity Provider. 
2. Your application requests the user's Identity Provider for the user's information via an OAuth2 request.
3. Identity Provider authenticates the user and sends the users details with an authorization_code to a pre-registered redirect_url on your server.
4. You will exchange the code for the actual user details by providing your information with the Identity provider. 
5. Identity Provider will then send the user information in the form of JWTs. You retrieve the user information from those assertions and if everything is valid, you will allow the user inside your application.

## How does Scalekit help

Scalekit acts as the intermediary between your application and your customer's identity providers and abstracts all the complexities and security issues in handling SAML or OIDC protocols. By integrating with Scalekit in just a few lines of code, your application can integrate with dozens of Identity Providers with SAML and OIDC Protocols. 

Go through our follow along [Quick Start](/docs/single-sign-on/quickstart-sso.md) guide, to integrate with Scalekit in just a few minutes.
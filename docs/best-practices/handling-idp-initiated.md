# Handling IdP initiated SSO

## Overview

In case of Identity Provider initiated SSO,

1. User logs into their identity provider portal and selects your application from within the IdP portal.
2. Identity Provider sends the user details as assertions to your application.
3. You validate assertions, retrieve the user information, and if everything checks, allow the user to successfully login yo your application.

<figure>![IdP initiated SSO workflow](./IDP%20initiated%20SSO.png)
<figcaption>IdP initiated SSO workflow</figcaption></figure>

Since the user login workflow starts from the Identity Provider portal (and not from your application), this flow is called as Identity Provider initiated SSO (aka IdP-initiated SSO).

## Risks with IdP initiated SSO

Most of the risks associated with IdP-Initiated SSO are because of stolen SAML assertions and injects into either another Service Provider or the same Service Provider with different assertions. With this stolen SAML assertion, an attacker can log into the service provider as the compromised user, gaining access to their account, something that would otherwise be much harder with SP-initiated SSO.

An attacker can steal a SAML assertion through various methods, such as Man-In-The-Middle (MITM) attacks, open redirect attacks, leaky logs and headers, or even browser-based attacks. In a MITM attack, the attacker intercepts the SAML response and assertion during transmission and replaces it with a forged one. In an open redirect attack, the attacker takes advantage of improper endpoint validation to redirect the SAML response to a malicious server. Leaky logs and headers can reveal sensitive information, including SAML assertions, which can be intercepted by attackers. Browser-based attacks involve exploiting vulnerabilities in the browser to steal SAML assertions.

The chief problem with stolen assertions is, for the service provider - everything seems legit. A service provider can see that the message and assertion are valid since it was issued by the expected issuer and signed with the expected key, but it cannot verify that a malicious party did not steal & use the assertion.

## Overcoming risks of IdP initiated SSO

As IdP initiated SSO offers significant convenience to the end users to login to various applications that are used in an organization, it is imperative that your application also support it. But, we can easily overcome the inherent security risks in IdP-Initiated SSO by using the incoming IdP initiated SSO request and converting it to a SP initiated SSO.

1. When an IdP-initiated SSO is received by Scalekit for one of your customers, we will ping the default redirect_uri configured in the Scalekit Dashboard with the connection_id details as request parameters.

```js
https://default_redirect_uri?idp_initiated_login=success&connection_id=conn_12442
```

2. You can handle this incoming idp initiated request and construct a new Authorization URL and redirect the user to this authorizationURL. This would automatically start the SP initiated SSO workflow for the user. Since the user is already logged into their Identity Provider (which is why they could initiate the IdP iniitated SSO in the first place), their identity provider will send a new clean SAML response thus eliminating all the risks of IdP initiated SSO and concerns of stolen assertions being used.

<Tabs groupId="tech-stack" queryString>
<TabItem value="nodejs" label="Node.js">

```javascript showLineNumbers
import {Scalekit} from "@scalekit-sdk/node";

// init client
const scalekit = new Scalekit(
  SCALEKIT_ENVIRONMENT_URL,
  SCALEKIT_CLIENT_ID,
  SCALEKIT_CLIENT_SECRET
);

const {code, error, error_description, idp_initiated_login, connection_id, relay_state} = req.query;

if (error) {
  // handle errors
}

// check if this is an idp initiated login
if (idp_initiated_login && idp_initiated_login === "success") {
  // handle idp initiated login
  const authorizationURL = scalekit.getAuthorizationUrl(redirectUri, {
    connectionId: connection_id,
    ...(relay_state && {state: relay_state}) // optionally pass relay state as state parameter
  })

  // next step is to redirect the user to this authorizationURL
}

// check if state received is same as what was sent as part of authorization-url

// if there are no errors and if this is not an IdP initiated SSO, then authenticate with the code
const res = await sc.authenticateWithCode({
  code: code,
  redirectUri: redirectUri
});

// res.user has the authenticated user's details
const userEmail = res.user.email;


// next step is to create a session for this user and allow access to your application resources
```

</TabItem>
<TabItem value="py" label="Python">

```python showLineNumbers
from scalekit import ScalekitClient, AuthorizationUrlOptions, CodeAuthenticationOptions

# init client
scalekit_client = ScalekitClient(
  <SCALEKIT_ENVIRONMENT_URL>, 
  <SCALEKIT_CLIENT_ID>, 
  <SCALEKIT_CLIENT_SECRET>
)

# Handle the oauth redirect_url
# fetch code and error_description from request parameters.
code = request.args.get('code')
error = request.args.get('error')
error_description = request.args.get('error_description')
idp_initiated_login = request.args.get('idp_initiated_login')
connection_id = request.args.get('connection_id')
relay_state = request.args.get('relay_state')

if error:
    raise Exception(error_description)

if idp_initiated_login and idp_initiated_login == "success":
    # handle idp initiated login
    authorization_url = scalekit_client.get_authorization_url(redirect_uri, {
        'connection_id': connection_id,
        'state': relay_state
    })
    # next step is to redirect the user to this authorization_url

# if there are no errors and if this is not an IdP initiated SSO, then authenticate with the code
result = scalekit_client.authenticate_with_code(code, redirect_uri)
# result.user has the authenticated user's details
user_email = result.user.email

# TODO Create a session and redirect the user to your dashboard
```

</TabItem>
</Tabs>

## Advantages

The advantages of using this approach to support IdP initiated SSO are

- You will completely overcome the security risks of handling IdP initiated SSO using this approach
- For the end user, it is a completely seamless experience except for an additional redirect which is almost always instantaneous. So, the end user wouldn't even notice the additional latency.

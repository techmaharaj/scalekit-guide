# Inspecting Claims in ID Token

An ID Token is nothing but a cryptographically signed Base64-encoded JSON object containing a set of name/value pairs about the user's profile information. Essentially, it is a JWT token. Ideally, it is advised that you validate an ID token before you use it, but since you are communicating directly with Scalekit over an intermediary-free HTTPS channel and using your client secret to exchange the `code` for the ID Token, you can be confident that the token you receive really comes from Scalekit and is valid. 

If you are using our Scalekit SDK to exchange the code for the ID Token, the work of decoding the base64url-encoded values and parsing the JSON within, validating the JWT and accessing the claims within the ID token is automatically taken care of.

## Example ID Token Payload

Here's an example, formatted for readability (and ignoring the header and signature fields for brevity):
```js

{
  "iss": "https://yoursaas.scalekit.com",
  "azp": "skc_12205605011849527",
  "aud": [
  	"skc_12205605011849527"
  ],
  "amr": [
    "conn_17576372041941092"
  ],
  "sub": "conn_17576372041941092;google-oauth2|104630259163176101050",
  "at_hash": "HK6E_P6Dh8Y93mRNtsDB1Q",
  "c_hash": "HK6E_P6Dh8Y93mRNtsDB1Q",
  "iat": 1353601026,
  "exp": 1353604926,
  "name": "John Doe",
  "given_name": "John",
  "family_name": "Doe",
  "picture": "https://lh3.googleusercontent.com/a/ACg8ocKNE4TZj2kyLOj094kie_gDlUyU7JCZtbaiEma17URCEf=s96-c",
  "locale": "en",
  "email": "john.doe@acmecorp.com",
  "email_verified": true
}

```

## Full list of ID Token Claims

|Claim|Provided|Description|
|--- |--- |--- |
|aud|always|The audience that this ID token is intended for. It must be one of the client IDs of your application.|
|amr|always|Array of Authentication Method Reference values that the user used to sign-in. Usually, it will have the connection_id using which the user completed the SSO flow.|
|exp|always|Expiration time on or after which the ID token must not be accepted. Represented in Unix time (integer seconds).|
|iat|always|The time the ID token was issued. Represented in Unix time (integer seconds).|
|iss|always|The Issuer Identifier for the Issuer of the response. It must be your environment url. https:<nolink/>//yoursaas.scalekit.com or https:<nolink/>//sso.yourdomain.com|
|oid|always|organization_id of the user|
|sub|always|An identifier for the user, as submitted by the Identity Provider that completed the Single Sign-on.|
|at_hash|always|Access token hash. Provides validation that the access token is tied to the identity token. |
|c_hash|always|Authorization code hash. Provides validation that the authorization code is tied to the identity token. |
|azp|always|The client_id of the authorized presenter. Usually, this will be same as the `aud`|
|email|always|The user's email address.|
|email_verified||True if the user's e-mail address has been verified as claimed by the Identity Provider; otherwise false.|
|name||Fully formatted user's name|
|family_name||The user's surname or last name.|
|given_name||The user's given name or first name.|
|locale||The user's locale, represented by a BCP 47 language tag.|
|picture||The user's profile picture in URL format|

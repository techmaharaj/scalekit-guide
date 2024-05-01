# Inspecting Claims in ID Token

An ID Token is nothing but a cryptographically signed Base64-encoded JSON object containing a set of name/value pairs about the user's profile information. Essentially, it is a JWT token. Ideally, it is advised that you validate an ID token before you use it, but since you are communicating directly with Scalekit over an intermediary-free HTTPS channel and using your client secret to exchange the `code` for the ID Token, you can be confident that the token you receive really comes from Scalekit and is valid. 

If you are using our Scalekit SDK to exchange the code for the ID Token, the work of decoding the base64url-encoded values and parsing the JSON within, validating the JWT and accessing the claims within the ID token is automatically taken care of.

## Example ID Token Payload

Here's an example, formatted for readability (and ignoring the header and signature fields for brevity):
```js

{
  "iss": "https://yoursaas.scalekit.com",
  "azp": "skc_12205605011849527",
  "aud": "skc_12205605011849527",
  "sub": "10769150350006150715113082367",
  "at_hash": "HK6E_P6Dh8Y93mRNtsDB1Q",
  "email": "john.doe@acmecorp.com",
  "email_verified": true,
  "iat": 1353601026,
  "exp": 1353604926
}

```

## Full list of ID Token Claims

|Claim|Provided|Description|
|--- |--- |--- |
|aud|always|The audience that this ID token is intended for. It must be one of the client IDs of your application.|
|exp|always|Expiration time on or after which the ID token must not be accepted. Represented in Unix time (integer seconds).|
|iat|always|The time the ID token was issued. Represented in Unix time (integer seconds).|
|iss|always|The Issuer Identifier for the Issuer of the response. It must be your environment url. https://yoursaas.scalekit.com or https://_cname_|
|sub|always|An identifier for the user, as submitted by the Identity Provider that completed the Single Sign-on.|
|at_hash|always|Access token hash. Provides validation that the access token is tied to the identity token. |
|azp|always|The client_id of the authorized presenter. Usually, this will be same as the `aud`|
|email|always|The user's email address.|
|email_verified||True if the user's e-mail address has been verified as claimed by the Identity Provider; otherwise false.|
|family_name||The user's surname or last name.|
|given_name||The user's given name or first name.|
|locale||The user's locale, represented by a BCP 47 language tag.|

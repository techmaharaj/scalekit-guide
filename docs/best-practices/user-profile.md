# Normalized User Profile
When a user logs in with SSO using their Identity Provider via Scalekit, we normalize the user profile information in standard fields so that you can easily access the user profile information regardless of the format, the Identity Provider chooses to send it in.

## Example User Profile payload
Below is the sample normalized user profile information in json.

```js wordWrap=true
{
    "email": "john.doe@acmecorp.com",
    "email_verified": true,
    "family_name": "Doe",
    "given_name": "John",
    "locale": "en",
    "name": "John Doe",
    "picture": "https://lh3.googleusercontent.com/a/ACg8ocKNE4TZj2kyxZrxrwLOj094k7JCZtbaiEma17URCEf=s96-c",
    "sub": "conn_17576372041941092;google-oauth2|104630259163176101050",
    "identities": [
        {
            "connection_id": "conn_17576372041941092",
            "organization_id": "org_17002852291444836",
            "connection_type": "OIDC",
            "provider_name": "AUTH0",
            "social": false,
            "provider_raw_attributes": {
                "aud": "ztTgHijLLguDXJQab0oiPyIcDLXXrJX6",
                "email": "john.doe@acmecorp.com",
                "email_verified": true,
                "exp": 1714580633,
                "family_name": "Doe",
                "given_name": "John",
                "iat": 1714544633,
                "iss": "https://dev-rmmfmus2g7vverbf.us.auth0.com/",
                "locale": "en",
                "name": "John Doe",
                "nickname": "john.doe",
                "nonce": "Lof9SpxEzs9dhUlJzgrrbQ==",
                "picture": "https://lh3.googleusercontent.com/a/ACg8ocKNE4TZj2kyxZrxrwLOj094k7JCZtbaiEma17URCEf=s96-c",
                "sid": "5yqRJIfjPh8c7lr1s2N-IbY6WR8VyaIZ",
                "sub": "google-oauth2|104630259163176101050",
                "updated_at": "2024-04-30T10:02:30.988Z"
            }
        }
    ]
}

```

## Full list of User Profile attributes

|Profile Attribute|Data Type|Description|
|--- |--- |--- |
|sub|string|An identifier for the user, as submitted by the Identity Provider that completed the Single Sign-on.|
|email|string|The user's email address.|
|email_verified|boolean|True if the user's e-mail address has been verified as claimed by the Identity Provider; otherwise false.|
|name|string|Fully formatted user's name|
|family_name|string|The user's surname or last name.|
|given_name|string|The user's given name or first name.|
|locale|string|The user's locale, represented by a BCP 47 language tag. Example: 'en'|
|picture|string|The user's profile picture in URL format|
|identities|Array of [Identity Objects](#identity-object-attributes)|Array of all identity information received from the Identity Providers in the raw format|

### Identity Object attributes
|Identity Attribute|Data Type|Description|
|--- |--- |--- |
|organization_id|string|Unique ID of the organization to which this user belongs to|
|connection_id|string|Unique ID of the connection for which this identity data is fetched from|
|connection_type|string|type of the connection: SAML or OIDC|
|provider_name|string|name of the connection provider. Example: Okta, Google, Auth0|
|social|boolean|Is the connection a social provider (like Google, Microsoft, Github etc) or an enterprise connection.|
|provider_raw_attributes|object|key-value map of all the raw attributes received from the connection provider as-is|

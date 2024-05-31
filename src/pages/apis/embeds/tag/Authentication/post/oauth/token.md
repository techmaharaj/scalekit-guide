<CodeWithHeader method="post" endpoint="/oauth/token">
<Tabs groupId="tech-stack" querystring>
<TabItem value="curl" label="cURL">

```bash showLineNumbers
curl --request POST \
  --url 'https://$env_url/oauth/token
  ?code=jhasd72
  &redirect_uri=https%3A%2F%2Fmysaasapp.com%2Fredirect_uri
  &client_id=skc_12344
  &client_secret=skc_prod_12441kjasad
  &grant_type=authorization_code'
```

</TabItem>
<TabItem value="nodejs" label="Node.js">

```js showLineNumbers
import {Scalekit} from "@scalekit-sdk/node";

// scalekit client takes care of authentication behind the scenes.
const scalekit = new Scalekit(
  SCALEKIT_ENVIRONMENT_URL,
  SCALEKIT_CLIENT_ID,
  SCALEKIT_CLIENT_SECRET
);

// Handle the oauth redirect
const { code, error_description } = req.query;
if (error_description) {
  return throw new Error(error_description );
}

// fetch user details by exchanding the code received in the request params
const { user } = await scalekit.authenticateWithCode(
  code,
  <redirectUri>
);

```

</TabItem>
<TabItem value="py" label="Python">

```python showLineNumbers
from scalekit import ScalekitClient, AuthorizationUrlOptions, CodeAuthenticationOptions

scalekit_client = ScalekitClient(<SCALEKIT_ENVIRONMENT_URL>, <SCALEKIT_CLIENT_ID>, <SCALEKIT_CLIENT_SECRET>)


# Handle the oauth redirect_url 
# fetch code and error_description from request parameters.
if error_description:
    raise Exception(error_description)

result = scalekit_client.authenticate_with_code(<code>, <redirect_uri>)

# TODO Create a session and redirect the user to your dashboard
```

</TabItem>
<!-- <TabItem value="golang" label="Go">

```go
go get https://www.github.com/scalekit-inc/go-sdk
```

</TabItem> -->
</Tabs>
</CodeWithHeader>
<CodeWithHeader title="Response">

```js
{
  "access_token": "ey ... vPnyWBQ",
  "expires_in": 899,
  "id_token": "eyJhbGc ... ar79GwZg",
  "token_type": "Bearer"
}
```

</CodeWithHeader>

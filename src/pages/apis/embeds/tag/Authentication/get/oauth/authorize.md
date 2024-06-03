<CodeWithHeader method="get" endpoint="/oauth/authorize">
<Tabs groupId="tech-stack" querystring>
<TabItem value="curl" label="cURL">

```bash showLineNumbers
curl --request GET \
  --url 'https://$env_url/oauth/authorize
  ?client_id=skc_12344
  &redirect_uri=https%3A%2F%2Fmysaasapp.com%2Fredirect_uri
  &response_type=code
  &state=hf68uyjh2189iuhj56789
  &scope=openid profile'
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

// Authorization URL with organization ID parameter and optional state parameter
 const authorizationURL = scalekit.getAuthorizationUrl(redirectUri, {
   organizationId: 'org_12442',
   state: state
 })

 // Authorization URL with optional login hint parameter
 const authorizationURL = scalekit.getAuthorizationUrl(redirectUri, {
   loginHint: 'user@example.com',
   organizationId: 'org_12442'
 })

// Authorization URL with connection ID parameter
 const authorizationURL = scalekit.getAuthorizationUrl(redirectUri, {
   connectionId: 'conn_1242242',
 })
```

</TabItem>

<TabItem value="py" label="Python">

```python showLineNumbers
from scalekit import ScalekitClient, AuthorizationUrlOptions, CodeAuthenticationOptions

scalekit_client = ScalekitClient(
  <SCALEKIT_ENVIRONMENT_URL>, 
  <SCALEKIT_CLIENT_ID>, 
  <SCALEKIT_CLIENT_SECRET>
)


options = AuthorizationUrlOptions()

# use one of the three strategies below to determine how to log the user in.

# If you would like to authenticate the user via connection_id
options.connection_id = 'conn_1242242'

# If you would like to authenticate the user via organization_id
options.organization_id = 'org_12442'

# If you would like to authenticate the user via their email address 
# Domain portion of the user's email address is used to detect the appropriate enterprise SSO connection
options.login_hint = '<user@example.com>'

authorization_url = scalekit_client.get_authorization_url(
  redirect_uri=<redirect_uri>, 
  options=options
)

# TODO redirect the user to the authorization url
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

User will be redirected to the appropriate Identity provider's login page based on either organization_id, or connection_id or domain.

</CodeWithHeader>

# Error Handling
import {SimpleCode} from '@site/src/components/custom';

If there are any configuration or application issues while the user tries to login with Single Sign-on via Scalekit, your application's redirect uri will receive the details of the error via the request parameters: error_code, error_description.

| Error Code | Error Details |
|---|---|
| <SimpleCode>invalid_redirect_uri</SimpleCode> | Redirect URI is not part of the pre-approved list of Redirect URIs. If this is a valid URL, you need to add it in the Scalekit Dashboard before using it. |
| <SimpleCode>invalid_organization_id</SimpleCode> | Organization ID is not valid |


<IntersectingHeader id="tag/Connection" title="Connection" />
<div className="row section">
    <div className="col col--6">
    </div>
    <div className="col col--6">
        <Endpoints tag="Connection" />
    </div>
</div>
<IntersectingHeader id="tag/Connection/object" title="The Connection Object" subheading="true" classList="ApiCategoryList" />
<div className="row section">
    <div className="col col--6">
        <ul className="ApiReference-Parameters">
            <li className="ApiReference-Parameter header">Attributes</li>
            <Parameter attrKey="id" type="string" description="Unique ID of the Connection" />
            <Parameter attrKey="organization_id" type="string" description="Organization ID to which this connection belongs to." />
            <Parameter attrKey="provider" type="enum" description="">
                <details>
                    <summary>Possible values</summary>
                    <Parameter attrKey="OKTA" />
                    <Parameter attrKey="GOOGLE" />
                    <Parameter attrKey="MICROSOFT_AD" />
                    <Parameter attrKey="AUTH0" />
                    <Parameter attrKey="ONELOGIN" />
                    <Parameter attrKey="PING_IDENTITY" />
                    <Parameter attrKey="JUMPCLOUD" />
                    <Parameter attrKey="CUSTOM" />
                </details>
            </Parameter>
            <Parameter attrKey="status" type="enum" description="">
                <details>
                    <summary>Possible values</summary>
                    <Parameter attrKey="DRAFT" />
                    <Parameter attrKey="IN_PROGRESS" />
                    <Parameter attrKey="COMPLETED" />
                </details>
            </Parameter>
            <Parameter attrKey="enabled" type="boolean" description="" />
            <Parameter attrKey="type" type="enum" description="">
                <details>
                    <summary>Possible values</summary>
                    <Parameter attrKey="OIDC" />
                    <Parameter attrKey="SAML" />
                </details>
            </Parameter>
            <Parameter attrKey="saml_config" type="object" description="">
                <details>
                    <summary>Child Attributes</summary>
                    <Parameter attrKey="sp_entity_id" type="string" />
                    <Parameter attrKey="sp_assertion_url" type="string" />
                    <Parameter attrKey="sp_metadata_url" type="string" />
                    <Parameter attrKey="idp_entity_id" type="string" />
                    <Parameter attrKey="idp_sso_url" type="string" />
                    <Parameter attrKey="idp_metadata_url" type="string" />
                    <Parameter attrKey="idp_certificates" type="array object">
                        <details>
                            <summary>Child Attributes</summary>
                            <Parameter attrKey="certificate" type="string" />
                            <Parameter attrKey="expiry_time" type="string" />
                            <Parameter attrKey="issuer" type="string" />
                            <Parameter attrKey="create_time" type="string" />
                        </details>
                    </Parameter>
                    <Parameter attrKey="idp_sso_request_binding" type="enum" description="">
                        <details>
                            <summary>Possible values</summary>
                            <Parameter attrKey="POST" />
                            <Parameter attrKey="REDIRECT" />
                        </details>
                    </Parameter>
                    <Parameter attrKey="idp_slo_url" type="string" description="" />
                    <Parameter attrKey="idp_slo_request_binding" type="enum" description="">
                        <details>
                            <summary>Possible values</summary>
                            <Parameter attrKey="POST" />
                            <Parameter attrKey="REDIRECT" />
                        </details>
                    </Parameter>
                    <Parameter attrKey="saml_signing_option" type="enum" description="">
                        <details>
                            <summary>Possible values</summary>
                            <Parameter attrKey="NO_SIGNING" />
                            <Parameter attrKey="SAML_ONLY_RESPONSE_SIGNING" />
                            <Parameter attrKey="SAML_ONLY_ASSERTION_SIGNING" />
                            <Parameter attrKey="SAML_RESPONSE_ASSERTION_SIGNING" />
                        </details>
                    </Parameter>
                    <Parameter attrKey="assertion_encrypted" type="boolean" description="" />
                    <Parameter attrKey="want_request_signed" type="boolean" description="" />
                </details>
            </Parameter>
            <Parameter attrKey="oidc_config" type="object" description="">
                <details>
                    <summary>Child Attributes</summary>
                    <Parameter attrKey="authorize_uri" type="string" description="" />
                    <Parameter attrKey="token_uri" type="string" description="" />
                    <Parameter attrKey="discovery_endpoint" type="string" description="" />
                    <Parameter attrKey="user_info_uri" type="string" description="" />
                    <Parameter attrKey="jwks_uri" type="string" description="" />
                    <Parameter attrKey="issuer" type="string" description="" />
                    <Parameter attrKey="redirect_uri" type="string" description="" />
                    <Parameter attrKey="client_id" type="string" description="" />
                    <Parameter attrKey="client_secret" type="string" description="" />
                    <Parameter attrKey="scopes" type="string" description="" />
                    <Parameter attrKey="pkce_enabled" type="boolean" description="" />
                    <Parameter attrKey="token_auth_type" type="string" description="" />
                </details>
            </Parameter>
            <Parameter attrKey="create_time" type="string" description="Timestamp at which this organization record was created in ISO 8601 format" />
            <Parameter attrKey="update_time" type="string" description="Timestamp at which this organization record was last updated in ISO 8601 format" />
        </ul>
    </div>
    <div className="col col--6">
        <div className="scalar-card-sticky">
            <CodeWithHeader title="Connection Object">
                ```js
                {
                    "id": "conn_2123312131125533"
                }
                ```
            </CodeWithHeader>
        </div>
    </div>
</div>
<APIEndpoint tag="Connection" method="get" endpoint="/api/v1/connections" />
<APIEndpoint tag="Connection" method="get" endpoint="/api/v1/organizations/{organization_id}/connections/{id}" />
<APIEndpoint tag="Connection" method="patch" endpoint="/api/v1/organizations/{organization_id}/connections/{id}:disable" />
<APIEndpoint tag="Connection" method="patch" endpoint="/api/v1/organizations/{organization_id}/connections/{id}:enable" />

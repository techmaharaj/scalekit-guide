---
sidebar_position: 1
---
import InstallSDK from './../templates/install-sdk.md';
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# Integrating Admin Portal

## Overview
Admin Portal is the self-serve UI widget that your customers can use to configure Single Sign-on between your application and their Identity Provider. 

As this is completely hosted and managed by Scalekit, we ensure that it is intuitive, up-to-date and customized for your customer's identity provider making the SSO configuration experience a breeze for your customers. 

Depending on your architecture and preference, you can choose either of the two methods we offer to integrate Admin Portal with your application.

1. Admin Portal integration via API
2. Admin Portal integration via Shareable Link

## 1. via API

### Configure SDK
<InstallSDK />

### Generate Link
You can generate a Admin Portal link for an organization using the below API. 


<Tabs groupId="tech-stack">
<TabItem value="nodejs" label="NodeJS">

```javascript showLineNumbers
const links = await sc.organization.generateCustomerPortalLink('org_1233222' as string);
// links[0] is the Admin Portal link
```

</TabItem>
<TabItem value="py" label="Python">

```python
# write python code here
```

</TabItem>
<TabItem value="golang" label="Go">

```go
// write go code here
```

</TabItem>
</Tabs>

The generated portal link is a magic link that will expiry within 5 minutes of generation or with the first access. But, the session that is created via this magic link will be valid till the IT admin completes the SSO configuration. 

You can either the redirect the user to this Admin Portal link or embed it as an iframe within your product for the IT admin to complete the configuration within your product. 

## 2. via Shareable Link

You can login to the Scalekit Dashboard and go to a specific organization's overview section.

### Generate Link
You can click on the Generate Link button to generate a new Admin Portal link that can be shared either via slack or email or any other communication means.

<!-- <Show screenshot> -->
The generated Admin Portal link is a magic link that has a default expiry period of 7 days from generation. You can also revoke this link anytime you wish from the Scalekit Dashboard. 

Any user who has access to this link can view and update SSO configuration for that organization. So, be careful to share this link with the appropriate user. 
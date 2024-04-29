---
sidebar_position: 1
---
import InstallSDK from './../templates/install-sdk.md';
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# Integrate Admin Portal

## Overview
Admin Portal is a self-service interface that empowers your customers' IT admins to configure SSO on their own. Designed to streamline the SSO setup process, it reduces the demand on your engineering resources and provides comprehensive IdP-specific documentation. Fully hosted and managed by Scalekit, the Admin Portal simplifies the SSO config experience, ensuring a fast and secure integration with only a few lines of code.

Depending on your architecture and UX preferences, you can choose one of the two methods to integrate the Admin Portal into your application:

1. Integration via API
2. Integration via Shareable Link

## 1. Integration via API

### Configure SDK
Begin by installing the Scalekit SDK, which provides necessary tools for creating a secure and efficient connection to the Admin Portal.
<InstallSDK />

### Generate Magic Link
Utilize our API to generate an Admin Portal link that is uniquely keyed to an organization.


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

Note: 
- This link is designed for one-time use, expiring after 5 minutes or upon its initial access.
- Once activated, the IT admin can configure SSO for a longer period of time. The session will remain active until the setup is complete.
- Depending on your UX strategy, you may choose to redirect the IT admin to this link or embed it within your application as an iframe, allowing configuration without navigating away from your product.


## 2. Integration via Shareable Link

You can login to the Scalekit Dashboard and go to a specific organization's overview section.

### Generate Link
You can click on the Generate Link button to generate a new Admin Portal link that can be shared either via slack or email or any other communication means.

<!-- <Show screenshot> -->
The generated Admin Portal link is a magic link that has a default expiry period of 7 days from generation. You can also revoke this link anytime you wish from the Scalekit Dashboard. 

Any user who has access to this link can view and update SSO configuration for that organization. So, be careful to share this link with the appropriate user. 

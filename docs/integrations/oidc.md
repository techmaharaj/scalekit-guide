import Subtitle from '@site/src/components/custom';

# OIDC
<Subtitle>Step-by-step guide to configure Single Sign-on using OIDC with any Identity Provider. </Subtitle>

### 1. OIDC Configuration

Sign into the SSO Configuration Portal, select **Custom Provider**, then **OIDC,** and click on **Configure.**  

<figure>![Select Custom Provider→OIDC and then Configure](Custom%20Provider%20-%20OIDC%20baf90efdb0b04d95a1ce0b908783d901/Untitled.png)
<figcaption>Select Custom Provider→OIDC and then Configure</figcaption></figure>

Copy the **Redirect URl** from the **SSO Configuration Portal**. 

<figure>![Copy Redirect URI](Custom%20Provider%20-%20OIDC%20baf90efdb0b04d95a1ce0b908783d901/Untitled%201.png)
<figcaption>Copy Redirect URI</figcaption></figure>

On your Identity Provider portal, select OIDC as the integration method, and Web Applications as application type. 

Paste this Redirect URI in the sign in redirect URI space on your identity provider portal  

### 2. Attributes Mapping

On your identity provider portal, if attribute mapping is required, map the given attributes exactly as shown below.

:::tip

Usually, you don't have to configure any attributes and by default - most identity providers support standard OIDC claims to send user information as part of ID Token or User Info endpoint.

:::

<figure>![Map exact attributes shown ](Custom%20Provider%20-%20OIDC%20baf90efdb0b04d95a1ce0b908783d901/Untitled%202.png)
<figcaption>Map exact attributes shown</figcaption></figure>



### 3. Assign User/Group

Choose who can access the app by assigning users to your app on your identity provider portal. 

### 4. IdP configuration

Find the client ID from your identity provider portal. Paste this in the space for Client ID on your SSO Configuration Portal.

<figure>![Enter copied Client ID in the SSO Configuration Portal](Custom%20Provider%20-%20OIDC%20baf90efdb0b04d95a1ce0b908783d901/Untitled%203.png)
<figcaption>Enter copied Client ID in the SSO Configuration Portal</figcaption></figure>


Similarly, generate and copy the Client Secret from your SSO Configuration Portal and paste it under Client Secret under IdP  Configuration. 

<figure>![Enter copied Client Secret in the SSO Configuration Portal](Custom%20Provider%20-%20OIDC%20baf90efdb0b04d95a1ce0b908783d901/Untitled%204.png)
<figcaption>Enter copied Client Secret in the SSO Configuration Portal</figcaption></figure>


Find and copy the Issuer URL from your custom provider’s portal.Paste the above URL in the **SSO configuration Portal** under **Issuer URL**. Click on Update. 

<figure>![Enter copied Issuer URL, and click Update](Custom%20Provider%20-%20OIDC%20baf90efdb0b04d95a1ce0b908783d901/Untitled%205.png)
<figcaption>Enter copied Issuer URL, and click Update</figcaption></figure>

:::info
We support configuring Issuer URL field with Discovery Endpoint also.

Discovery Endpoints usually end with ./well-known/openid-configuration
:::

### 6. Finalize App

Your IdP configuration section on the SSO Configuration Portal should look something like this once you’re done configuring it.

<figure>![Completed view of IdP configuration on the SSO Configuration Portal](Custom%20Provider%20-%20OIDC%20baf90efdb0b04d95a1ce0b908783d901/Untitled%206.png)
<figcaption>Completed view of IdP configuration on the SSO Configuration Portal</figcaption></figure>


### 7. Test Connection

Click on **Test Connection.** If everything is done correctly, you will see a **Success** response as shown below. 

If the connection fails, you’ll see an error, the reason for the error, and a way to solve that error right on the screen.  

<figure>![Test SSO Configuration](Custom%20Provider%20-%20OIDC%20baf90efdb0b04d95a1ce0b908783d901/Untitled%207.png)
<figcaption>Test SSO Configuration</figcaption></figure>



### 8. Enable connection

Click on **Enable Connection.** This will let all your selected users login to the new application via OIDC.

<figure>![Enable OIDC Connection ](Custom%20Provider%20-%20OIDC%20baf90efdb0b04d95a1ce0b908783d901/Untitled%208.png)
<figcaption>Enable OIDC Connection</figcaption></figure>


With this, we are done configuring your application for an OIDC login setup.
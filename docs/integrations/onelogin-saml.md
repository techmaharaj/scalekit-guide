import Subtitle from '@site/src/components/custom';

# OneLogin - SAML

<Subtitle>Step-by-step guide to configure Single Sign-on with OneLogin as the Identity Provider. </Subtitle>

### 1. Creating Enterprise Application

Login to your **OneLogin Portal**. Go to **Applications→ Applications.** 

<figure>![Locate Applications](OneLogin%20-%20SAML%20c405bd72a1964e219c9fea285e869407/Untitled.png)
<figcaption>Locate Applications</figcaption></figure>

Click on **Add App.** 

<figure>![Click on Add App](OneLogin%20-%20SAML%20c405bd72a1964e219c9fea285e869407/Untitled%201.png)
<figcaption>Click on Add App</figcaption></figure>


In the **Find Application** search box, type in **SAML Custom Connector (Advanced)**, and select it from the drop down list.  

<figure>![Select SAML Custom Connector from drop down (GIF)](OneLogin%20-%20SAML%20c405bd72a1964e219c9fea285e869407/Untitled_design.gif)
<figcaption>Select SAML Custom Connector from drop down (GIF)</figcaption></figure>

Give your app a name that reflects the application you'll be connecting it to, so users can easily recognize it in their OneLogin portal., select your icon (optional) and then click on **Save.** 

<figure>![Click on Save](OneLogin%20-%20SAML%20c405bd72a1964e219c9fea285e869407/Untitled%202.png)
<figcaption>Click on Save</figcaption></figure>


### 2. SAML Configuration

On the Application page click on **Configuration.** 

<figure>![Locate Configuration ](OneLogin%20-%20SAML%20c405bd72a1964e219c9fea285e869407/Untitled%203.png)
<figcaption>Locate Configuration </figcaption></figure>


From your **SSO Configuration Portal**, copy the **ACS (Consumer) URL**. Go back to your **OneLogin Admin Portal**, and paste it in the **Recipient** and **ACS (Consumer) URL Validator** fields. 

<figure>![Copy ACS (Consumer) URL on SSO Configuration Portal ](OneLogin%20-%20SAML%20c405bd72a1964e219c9fea285e869407/Untitled%204.png)
<figcaption>Copy ACS (Consumer) URL on SSO Configuration Portal </figcaption></figure>


**OneLogin Admin Portal**

<figure>![Paste it in Recipient, ACS URL Validator, and ACS(Consumer) URL fields on OneLogin Admin Portal](OneLogin%20-%20SAML%20c405bd72a1964e219c9fea285e869407/Untitled%205.png)
<figcaption>Paste it in Recipient, ACS URL Validator, and ACS(Consumer) URL fields on OneLogin Admin Portal</figcaption></figure>

Similarly, copy the **Audience (Entity ID) f**rom your SSO Configuration Portal. Go back to your **OneLogin Admin Portal**, and paste it in the **Audience (EntityID).**

<figure>![Copy Audience (Entity ID) on SSO Configuration Portal](OneLogin%20-%20SAML%20c405bd72a1964e219c9fea285e869407/Untitled%206.png)
<figcaption>Copy Audience (Entity ID) on SSO Configuration Portal</figcaption></figure>

<figure>![Paste copied URL in Audience (EntityID) on OneLogin Admin Portal](OneLogin%20-%20SAML%20c405bd72a1964e219c9fea285e869407/Untitled%207.png)
<figcaption>Paste copied URL in Audience (EntityID) on OneLogin Admin Portal</figcaption></figure>


Click on **Save**.

<figure>![Locate Save](OneLogin%20-%20SAML%20c405bd72a1964e219c9fea285e869407/Untitled%208.png)
<figcaption>Locate Save</figcaption></figure>


### 3. Attribute Mapping

Go to the **Parameters** tab on **OneLogin Admin Portal**, and click on the plus (+) sign to add attributes. 

<figure>![Locate Parameters tab ](OneLogin%20-%20SAML%20c405bd72a1964e219c9fea285e869407/Untitled%209.png)
<figcaption>Locate Parameters tab </figcaption></figure>

Check the **Attribute Mapping** section in the **SSO Configuration Portal**, and carefully map the **exact** **same attributes** on your **OneLogin Admin Portal**. 

<figure>![Check attributes on SSO Configuration Portal ](OneLogin%20-%20SAML%20c405bd72a1964e219c9fea285e869407/Untitled%2010.png)
<figcaption>Check attributes on SSO Configuration Portal </figcaption></figure>


<figure>![Paste attributes on OneLogin Admin Portal](OneLogin%20-%20SAML%20c405bd72a1964e219c9fea285e869407/Untitled_design_(4).gif)
<figcaption>Paste attributes on OneLogin Admin Portal</figcaption></figure>


### 4. Assign User/Group

Go to the **Users** tab. 

<figure>![Locate Users under Users tab](OneLogin%20-%20SAML%20c405bd72a1964e219c9fea285e869407/Untitled%2011.png)
<figcaption>Locate Users under Users tab</figcaption></figure>


Click the user you want to assign to the application. 

<figure>![Select user to assign](OneLogin%20-%20SAML%20c405bd72a1964e219c9fea285e869407/Untitled%2012.png)
<figcaption>Select user to assign</figcaption></figure>


Click on the **Applications** tab. Click on the **+** sign to assign the newly created application. 

<figure>![Add application to previously selected user](OneLogin%20-%20SAML%20c405bd72a1964e219c9fea285e869407/Untitled%2013.png)
<figcaption>Add application to previously selected user</figcaption></figure>


Select the newly created application from the drop down, and click on **Continue.** 
<figure>![Select application from drop-down](OneLogin%20-%20SAML%20c405bd72a1964e219c9fea285e869407/Untitled%2014.png)
<figcaption>Select application from drop-down</figcaption></figure>

Click on **Save**. 
<figure>![Save user assignment to application](OneLogin%20-%20SAML%20c405bd72a1964e219c9fea285e869407/Untitled%2015.png)
<figcaption>Save user assignment to application</figcaption></figure>

### 5. Upload IdP Metadata URL

On **OneLogin Admin Portal**, click on SSO. Copy the **Issuer URL**. 
<figure>![Copy Issuer URL on OneLogin Admin Portal](OneLogin%20-%20SAML%20c405bd72a1964e219c9fea285e869407/Untitled%2016.png)
<figcaption>Copy Issuer URL on OneLogin Admin Portal</figcaption></figure>

Under **Identify Provider Configuration,** select **Configure using Metadata URL,** and paste it under **App Federation Metadata URL** on the **SSO Configuration Portal.**

<figure>![Paste Issuer URL on SSO Configuration Portal ](OneLogin%20-%20SAML%20c405bd72a1964e219c9fea285e869407/Untitled%2017.png)
<figcaption>Paste Issuer URL on SSO Configuration Portal </figcaption></figure>


### 6. Test Connection

Click on **Test Connection.** If everything is done correctly, you will see a **Success** response as shown below. 

If the connection fails, you’ll see an error, the reason for the error, and a way to solve that error right on the screen.

<figure>![Test SSO Configuration](OneLogin%20-%20SAML%20c405bd72a1964e219c9fea285e869407/Untitled%2018.png)
<figcaption>Test SSO Configuration</figcaption></figure>


### 7. Enable Connection

Click on **Enable Connection.** This will let all your selected users login to the new application via your **OneLogin Admin Portal** SSO. 

<figure>![Enable SSO on Onelogin Admin Console](OneLogin%20-%20SAML%20c405bd72a1964e219c9fea285e869407/Untitled%2019.png)
<figcaption>Enable SSO on Onelogin Admin Console</figcaption></figure>

With this, we are done configuring your **OneLogin Admin Portal** application for an SSO login setup.
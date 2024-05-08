---
excerpt: "This article describes how to integrate Scalekit with your Firebase application"
metadata: 
  description: "This document provides a guide on integrating Scalekit with Firebase applications for seamless Single Sign-on Authentication. It includes steps on configuring Scalekit as an OpenID Connect provider in Firebase and provides sample code for managing SSO within the app's Firebase environment."
---
# Firebase
<Subtitle>Learn how to integrate Scalekit with Firebase via OpenID Connect (OIDC)</Subtitle>

## Introduction
This guide is designed to streamline the integration process of Scalekit with Firebase applications, thereby facilitating seamless Single Sign-on (SSO) Authentication for your users. We will walk you through the process of configuring your Firebase project with Scalekit. We will also provide you with practical sample code, demonstrating how to effectively manage Scalekit SSO from within your app's Firebase environment. 

To begin, we'll start with an overview of the SSO workflow, laying the foundation for the subsequent integration steps.

<figure>![Scalekit - Firebase Integration](./firebase/How%20Scalekit%20connects%20with%20Firebase.png)
<figcaption>Scalekit - Firebase Integration</figcaption></figure>




Scalekit is engineered as a fully compatible OpenID Connect Provider, thus streamlining the integration process. We'll demonstrate how to configure Scalekit so that Firebase can automatically handle much of the workflow. With just a few lines of code, you'll be able to seamlessly integrate Single Sign-On capability into your product.

## Pre-requisites

- Ensure you have access to Firebase Authentication with Identity Platform. **Please note** that OpenID Connect feature is not available in the Legacy Firebase Authentication. [Refer here](https://cloud.google.com/identity-platform/docs/product-comparison) for more information. 
- Access to your Scalekit account


## Setting up Firebase

**Adding Scalekit as Open ID Connect provider in the Firebase project **

- Login to your [Firebase Management Console](https://console.firebase.google.com/) and access your project. Go to the **Authentication** section to configure appropriate authentication methods for your project. Select **Sign-in method** tab.

![Sign-in tab in your Firebase Console](./firebase/df26e33-SCR-20240405-lcif.png)

- Click on **Add new provider** and select **OpenID Connect** to start configuring Scalekit as an authentication method in your Firebase project
- This opens up a window where you have to Define new OIDC provider settings in your Firebase project 
- Choose Code flow in the Grant Type option and set Name as Scalekit
- To setup a successful OIDC connection, you would need to enter the details of Client ID, Issuer URL, Client secret. To get these details, you need to access the API Config from your Scalekit account.


### Retrieve Configuration Details from Scalekit

- Login to your Scalekit Dashboard. Navigate to the API Config section in the Settings to identify the appropriate configuration elements. 
  - copy Client ID from the Scalekit API Config and paste in your Firebase project's Client ID
  - copy Environment URL from the Scalekit API Config and paste it in your Firebase project's Issuer URL
  - Generate a new Client secret from the Scalekit API Config and paste it in your Firebase project's Client secret

![Copy credentials from your Scalekit Dashboard](./firebase/5e3a493-SCR-20240405-ldav.png)


![Paste in your Firebase Console](./firebase/e5e5377-SCR-20240405-mjzz.png)

### Add Redirect URI in Scalekit API Config

After defining new OIDC provider, you would need to Configure OIDC Integration in your Firebase project. Copy the Callback URL from your Firebase project and add it as a new Redirect URI in your Scalekit API Config

![Copy Redirect URI from your Firebase Console](./firebase/2f0f7f9-SCR-20240405-ldjm.png)

![Add Redirect URI in your Scalekit Dashboard](./firebase/4519fa4-SCR-20240405-ldlf.png)


## Enable Single Sign-on in your Login Page

After you have successfully configured Scalekit as OIDC provider in your Firebase project, it's time to modify your app's login page - to invoke Single Sign-on and send the request to Scalekit with the user details. 

You can follow the below sample code in your app's login page to understand how to configure SSO through Scalekit using Firebase JS script.

```javascript title="Login.js" showLineNumbers

// Initialize Scalekit as OIDC provider
// get the provider id from your firebase project
const scalekitProvider = new OAuthProvider('oidc.scalekit');

// add custom parameters to this provider. use any of organization_id, connection_id or domain
scalekitProvider.setCustomParameters({domain: 'email@yourcustomer.com'});
//scalekitProvider.setCustomParameters({organization_id: 'org_123445'});
//scalekitProvider.setCustomParameters({connection_id: 'conn_1234323214'});


// when user clicks Login with SSO
loginbtn.onclick(){
	// start sign-in and get the user details
  signInWithPopup(auth, scalekitProvider)
    .then((result) => {
    // Get the OAuth access token and ID Token
    const credential = OAuthProvider.credentialFromResult(result);
    const user = result.user.providerData[0];

    // access user details via user.email, user.displayName etc
  })
    .catch((error) => {
    // Handle Errors here.
    // ...
  });
}
```

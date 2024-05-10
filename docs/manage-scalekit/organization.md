# Organizations

## Overview
Organizations represent your customers (or accounts) in your application. Your application’s users would belong to these Organizations. For each of your customer who needs to use Single Sign-on (SSO) to login to your application, you need to create an Organization in Scalekit Dashboard and configure their SSO settings in that Organization.

Navigate to the **Organizations** section in your Scalekit Dashboard to view all Organizations that are configured for your application. Reference screenshot shown below:

<figure>![Organizations View](./organization/SCR-20240509-qhnx.png)
<figcaption>List of Organizations</figcaption></figure>

## Create Organization
You can create a new Organization by clicking on the **Create new** button. Enter the name of the organization and click **Add**.

<figure>![Create Organization](./organization/SCR-20240509-qixz.png)
<figcaption>Create Organization</figcaption></figure>

After the organization is successfully created, you are redirected to the newly created Organization's Overview tab. From here, you can perform multiple actions in this new Organization such as Enable Single Sign-on, Generate Admin Portal link, configure Home Realm Discovery etc

## Generate Admin Portal Link
Admin Portal is a configuration portal that enables your customers' IT admins to configure Single Sign-on on their own. Designed to streamline the SSO config process, Admin Portal reduces the demand on your engineering resources and eliminates back-n-forth customer support issues. Fully hosted and managed by Scalekit, Admin Portal ensures a fast and secure integration with only a few lines of code.

In the **Admin Portal** section, click 'Generate Link' to create a new shareable Admin Portal link. Copy this link and share it with your customer's admin team to let them enable Single Sign-on between your application and their Identity Provider. Please note that the Admin Portal link has an expiry timestamp and can be revoked at any time for security reasons. Screenshot below shows the generated Admin Portal link.

<figure>![Organization - Generate Admin Portal link](./organization/SCR-20240509-qkse.png)
<figcaption>Organization - Generate Admin Portal link</figcaption></figure>


## Enable Home Realm Discovery
**Home Realm Discovery (HRD)** is the process that allows Scalekit to determine which identity provider (IdP) a user needs to authenticate with at the time of log-in. Based on the domain portion of the user's email address, Scalekit determines the organization and thus the SSO Connection that needs to be used to authenticate the user. 

To enable seamless Home Real Discovery, configure the domains that need to be mapped to an organization by adding all the relevant domains in the **Domains** section of the Overview tab. Example screenshot shown below.
<figure>![Organization - Domain configuration](./organization/SCR-20240509-qjcq.png)
<figcaption>Organization - Domain configuration</figcaption></figure>

:::info
Ensure you add only the domains that you know are owned by this organization. 

Coming Soon: Self Serve DNS based domain verification for your organizations.
:::


## Manage SSO Connections
You can monitor the SSO configuration process to assist your customers by navigating to the **SSO Connection** tab. You can also modify and configure the Single Sign-on details on behalf of your customer, if you have all the necessary information about your customer's Identity provider. 

Example screenshot below.
<figure>![Organization - SSO Connection tab](./organization/SCR-20240509-qlnn.png)
<figcaption>Organization - SSO Connection tab</figcaption></figure>

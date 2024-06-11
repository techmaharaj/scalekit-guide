---
hide_table_of_contents: true
pagination_next: integrations/saml
---

# Overview

## Identity Providers

<section class="row">

<CardTileWithImage imageSrc=""
title="Okta SAML"
description="Step-by-step guide to configure Single Sign-on using Okta"
url="/integrations/okta-saml"></CardTileWithImage>

<CardTileWithImage imageSrc="data:image/svg+xml,%3csvg%20width='36'%20height='36'%20viewBox='0%200%2036%2036'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cg%20id='Microsoft%20logo'%20clip-path='url(%23clip0_1225_9643)'%3e%3cpath%20id='Vector'%20d='M17.1085%2017.1058H0V0H17.1085V17.1058Z'%20fill='%23F1511B'/%3e%3cpath%20id='Vector_2'%20d='M36%2017.1058H18.89V0H35.9985V17.1058H36Z'%20fill='%2380CC28'/%3e%3cpath%20id='Vector_3'%20d='M17.1085%2036H0V18.8943H17.1085V36Z'%20fill='%2300ADEF'/%3e%3cpath%20id='Vector_4'%20d='M36%2036H18.89V18.8943H35.9985V36H36Z'%20fill='%23FBBC09'/%3e%3c/g%3e%3cdefs%3e%3cclipPath%20id='clip0_1225_9643'%3e%3crect%20width='36'%20height='36'%20fill='white'/%3e%3c/clipPath%3e%3c/defs%3e%3c/svg%3e"
title="Entra ID (Azure AD) SAML"
description="Step-by-step guide to configure Single Sign-on using Entra ID (Azure AD)"
url="/integrations/azure-ad-saml"></CardTileWithImage>

<CardTileWithImage imageSrc="data:image/svg+xml,%3csvg%20width='36'%20height='36'%20viewBox='0%200%2036%2036'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cg%20id='OneLogin%20logo'%20clip-path='url(%23clip0_1225_9631)'%3e%3cpath%20id='Vector'%20d='M18%2036C27.9411%2036%2036%2027.9411%2036%2018C36%208.05887%2027.9411%200%2018%200C8.05887%200%200%208.05887%200%2018C0%2027.9411%208.05887%2036%2018%2036Z'%20fill='%231F1F1F'/%3e%3cpath%20id='Vector_2'%20d='M16.0195%2012.3228H13.6905C13.5146%2012.323%2013.3459%2012.393%2013.2215%2012.5174C13.0971%2012.6418%2013.0271%2012.8105%2013.0269%2012.9864V15.972C13.0271%2016.148%2013.0971%2016.3167%2013.2215%2016.4411C13.3459%2016.5655%2013.5146%2016.6355%2013.6905%2016.6357H16.0195V24.1579C16.0198%2024.3338%2016.0898%2024.5025%2016.2142%2024.6269C16.3386%2024.7513%2016.5072%2024.8213%2016.6832%2024.8215H19.6688C19.8448%2024.8213%2020.0134%2024.7513%2020.1378%2024.6269C20.2622%2024.5025%2020.3322%2024.3338%2020.3325%2024.1579V12.9864C20.3322%2012.8105%2020.2622%2012.6418%2020.1378%2012.5174C20.0134%2012.393%2019.8448%2012.323%2019.6688%2012.3228H16.0195Z'%20fill='white'/%3e%3c/g%3e%3cdefs%3e%3cclipPath%20id='clip0_1225_9631'%3e%3crect%20width='36'%20height='36'%20fill='white'/%3e%3c/clipPath%3e%3c/defs%3e%3c/svg%3e"
title="OneLogin SAML"
description="Step-by-step guide to configure Single Sign-on using OneLogin"
url="/integrations/onelogin-saml"></CardTileWithImage>

<CardTileWithImage imageSrc="https://cdn.scalekit.com/v1/assets/jumpcloud-icon-CfI-kYr0.svg"
title="JumpCloud SAML"
description="Step-by-step guide to configure Single Sign-on using JumpCloud"
url="/integrations/jumpcloud-saml"></CardTileWithImage>

<CardTileWithImage imageSrc="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAuCAYAAABqK0pRAAAFh0lEQVR4AcVZfVLbRhR/b2Xyb9wTVDlAjQJ0pp1O/HGCkBMEThA4QcwJAicIPUHoCbBhOu1M+BD0AFVPUDfljw5G+/reWjKyrV3JRnZ+M4yNvNrd39v3vQBLxNn65sfzxsZ7WAEQloTfgh/8oR7+OVqEuq9urw5giVCwJAxpOD4JAuzK6cASsfCJiMR/DH+PbL+lp5EFIYQa404nDAdQMRY6EdH7/yCu237PnkYWSBB42rsWolAx5iZyHmy1CdHvhJ/DvN/NJgl2HFPIaZ1WTWYuItdBu06aPsYYWw3XdhpTqJzMXET+1V/es1X1WMejvN9LnEYWlZIpTWS0IO5VcBpZVEamNBGzSYTjik4ji0rIlCIiBi6bdJ5GfN+efsbudsAx5IBXebOm1l54Sr0ERbuAeDI19MlkSsURDman/BE1by53rWMamxI3/PR/AjjSKu7aYsZpEPhKe13ewNvM44gJd2zxyYVCIsbdajpFhZ1X4UXPNWb8gNRu84/Px1AChhB5pxxj/ORRFKv45bxBs1C1iIhtA3s2EsmYjFRxvywJgdhc6+byhVHBEXyPvE8wJ5xEEttoA+qfXePMGPOBB83bi0NYAK3biy7bz34631lj68M87zuJiKTZYKNmeHVsG2PIshRlnNnME8DrHIpj4K+sVrR31tjYK/uulUjqTtmIeuCA1rQtn4iwDxWgGV6esHfrgCGDHxJBFcJKJA1uMaojcE6ALbEh2QBUhJ84j0vJsBP5VMYt5xJhT1Ln09gWdbElhwJZgIACPo3KiyYhk9hM/Z6GhcafS8SLlaiLkPnF9bIEQSHr8mhPgbFNJiPpf5Hx56sWolErpdCtLgpbiLTQaZTVfXEAElzF+F3vKMsCPv8NCiXNbjIG7R5jfZXqZRsTrdvLPakupYQwap+DGSLj4IYYuib/Nfg+YEnd2JLIIohz0HykZeMFl8jiluueruWSnyCSGrl8Z0I34ECsqY0KjuEJMHEHKeivbxaWvyIwTpPe2FRsgsjYyEGSMIxcE8fq4aQKlxsnki6T/Yqqi73kqdikaikc50wsbadqLapSOfMMaqhKk0nsZaB0bSLqj4kkkbwNXwFJzBDvV6ouEXvhpt/b7LgxkenC6AFqEawQJs9Ckw4VkjHaoOiIs49x0+9RtTJqNYK9b7UssL1I4SZ1SCEZQxwe45EhkqdWXgwBrBgiaS4F0tyukIwQZ+/6Tr4bIvn1tl45EYFWDyLptDr0Jc+yBUGjYkh9OZWRail8PT1IamnbBMuEeDF2seMcz7RZybMGTVGxB3gIR0TyvZU1ii4bHMMmXT/XRa50RsgrSTUgCYKz4Ci6oouayWUpmnnEVxPOpFFSDXDNmdxtLNpzkn6xvFuFmrqSxhorYUuaUO4ZYId99g4T6hFhH5WOZhdRPqf03/LXOpnsmeoIKvqi7/piwHO1d7jbD/mbSjssnZlXzhtb11LlQVXgspcI+s9U7XiRRptgutk3C9pv3l5NdGs4jd78G6w24obkPGKYkilzbtaLIe499Tbq7LuNHRZG0TXdgJt4L7Jr1aAkiclNU+SB17uHYVTlNZo4nljrMvVJPXHJ4xYu9hubh4jq+XjDpP/hx4ORHeDAYz2vesN5OG9svmOr6MIcgtWoOmlzZGnX02Vh+sbSli2ReadaIZ1PLrFPssL9KkTEJfPtl9jC6yICo82rE8C4P735LFZGZHRlfb9dtPlHW4S+YgdSttW0FCIi8Tu4C0hz4om4nvQBcnU/2XiP1aXPkg8lb1rEHhciItLVXK/wUfsS+NJgyMYamEBI6EPOhvlD1ITjDP3Fni9cg7Vw0VgzjVwikgY8gzU/juOA0GxynR/XNdA3LL3nlql4k6bxHGU9n0T3GlebVW3Yhv8BmwchxIgl+vsAAAAASUVORK5CYII="
title="SAML 2.0"
description="Step-by-step guide to configure Single Sign-on using SAML"
url="/integrations/saml"></CardTileWithImage>

<CardTileWithImage imageSrc="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADMAAAAuCAYAAACF6SFvAAADlklEQVR4Ae1Zv2/TQBT+4kaECaUrkzsXaKO0nZBq/gGaDkhsuMDAliKxN/kPmhUhEkQlxoaFtenatErYmKilqgwMKIUNkpjvBTukP3yJU9t1pH7S6Xz2O/s+v/fu3rsDrgD2M+Tsp1hHwNAQIewX0ElkBza22UwjYERGhiTy+I0GiRgICUmEDNEG/qAcJgkXoWomCm0MIjTN2CY1YmMTESLSCSBsXJOJK67JxBXXZOKKBAJCo9HQO53OvG3buqZpc6kfX/XZD48ML/nv9x5bR/dfNSn/OZFINLvdrrW0tNTEJTD2osnBp9vttikD54ByJNILHDkwsI1uMqXs307d0lnplM9Jm+/B/v6+XNbYf1fqxcXFGnzAFxmXAAewwsEb7sADhrzXYL1xcHBgsa6RaDGTyVjwGBO1mmc5GYmM24EE1vmhwEN3L4jJsjL5XZPEKqxLg6ZYr9cNjqvsyBWVZAZJIIT8ww84YDHpPqmpqam83Bu0DE8yZ1iPghb+23tz+ssnubfjJXy7/rp4nH1e5QB1Ng2WZZZ5DIFL6iLzvpAMHTHPanMEf3AJlM46ay9qHjLxOyYjpSptmRH5Aw1ebvj4iX2cI0M1yosKQ/q1hEAymdykY7YQEBwnr0jhOEz4JHWKzIhEarTXNa/ZJShks9kKLUR+VBkj+mufjJjWMCJ8XqQ5KWWCgLMACwnDTz/N7cxKmRVGRUSsg0QagP9Uu6cZOt2GSihKjXBRltlwFz5B/7WSjkpNLyEuktbCwkIBEcDxQwtjQnMWRBWKmBCIz8wpnrdkVsGEQMioVt1LheRRQ8h4zuHiL5ggCBnPFZyz3DQmCELG8npIzSxjgiBkVHN6WqJnTAg0LohVlQC1o1xQ4wTNCd1rChmD2gn8lCsM9GIzCVdUQqKdvb29oYnTVaNHxtFOSSGXZna3w8g6hxijnwsy/hJTqilkZT3alqgWMcWpxJZJ1yrUhMQkCyR06GSCscIpMpICU0MPoDa53hYQS9kl5eRDVw7P7dkxcvD+TiRzi+Z8KZPmrzpUyBcTb1FAgFDuNTu5ToGXT+ATqZ/HrTtbK2mPr9bQwctEJdhAdqSN83FI3fj1DXffPzx7W+JA0UgoB7cjHWlIBkhfMjlBzLD5bsxouoouZsIiIhj7SENiNpIy8S+5O7egDmjG4i9bS7xRz5JBIJDzGed0QAgJQSGXvnlypM9urX6EjQJ9I7CNQhX+Ag7L0Pd4K4tdAAAAAElFTkSuQmCC"
title="OpenID Connect (OIDC)"
description="Step-by-step guide to configure Single Sign-on using OIDC"
url="/integrations/oidc"></CardTileWithImage>

</section>

## Auth Systems

<section class="row">

<CardTileWithImage imageSrc="https://firebase.google.com/static/downloads/brand-guidelines/SVG/logo-logomark.svg"
title="Firebase"
description="Integrate Scalekit in your Firebase Project"
url="/integrations/firebase"></CardTileWithImage>

<article className='col col--4 margin-bottom--lg'>
    <a className='card padding--lg cardContainer' href="/integrations/auth0">
        <h3>
            <svg viewBox="0 0 53 64"><path d="M3.372 27.782c10.475-1.728 18.686-10.4 20.407-20.892l.577-5.043c.143-.802-.4-1.918-1.412-1.838C15.03.628 7.56 3.243 3.406 4.943A5.488 5.488 0 000 10.027v16.451c0 .973.874 1.717 1.834 1.563l1.538-.252v-.006zM28.831 6.89c1.726 10.492 9.938 19.164 20.407 20.893l1.537.252c.96.16 1.835-.584 1.835-1.563v-16.45a5.488 5.488 0 00-3.406-5.084C45.044 3.232 37.58.622 29.666.004c-1.018-.08-1.538 1.048-1.418 1.837l.577 5.043.006.006zM49.23 32.39C34.915 35.219 28.27 44.75 28.27 62.79c0 .905.897 1.535 1.651 1.031 6.584-4.447 21.07-16.056 22.562-30.577.057-1.826-2.223-.968-3.252-.853zM3.377 32.39c14.315 2.828 20.961 12.359 20.961 30.4 0 .905-.897 1.535-1.651 1.031C16.103 59.374 1.617 47.765.125 33.244c-.057-1.826 2.223-.968 3.252-.853z"></path></svg>
            <p>Auth0</p>
        </h3>
        <p>Integrate Scalekit in your Auth0 Tenant</p>
    </a>
</article>

</section>

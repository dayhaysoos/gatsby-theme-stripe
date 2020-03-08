# Gatsby Starter Stripe Base

## WARNING!!!

This only works for Stripe's new Checkout API. If you create your products with "Orders" this will not work


# Features

- Creates GraphQL Nodes based off Stripe Product API

# Usage


You can get your Stripe API keys here:

[https://dashboard.stripe.com/apikeys](https://dashboard.stripe.com/apikeys)

Be sure to set up environment variables at the root of the project so you can hide your secret keys:

`.env.development`

```
STRIPE_API_SECRET=SECRET_KEY_HERE
STRIPE_API_PUBLIC=PUBLIC_KEY_HERE

```


In your `gatsby-config.js`

```
require('dotenv').config({
  path: `.env.${process.env.NODE_ENV}`,
})

module.exports = {
  plugins: [
    {
      resolve: 'gatsby-theme-stripe-storefront',
      options: {
        stripePublicKey: process.env.STRIPE_API_PUBLIC,
        billingAddressCollection: 'required', // optional if you need billing addresses from customers
        successUrl: localhost:8000/thank-you // replace this url with the real url to your site with /thank-you at the end
      },
    },
  ],
}

```

We intentionally avoid passing the stripeSecretKey in Gatsby config for security reasons.


# Feedback

If you ran into issues trying to use this, would like to request a feature or areas where this can be improved, please open up an issue or hit me up on Twitter. @Dayhaysoos

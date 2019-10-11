# Gatsby Starter Stripe Storefront

This is a starter built off of [gatsby-theme-stripe-storefront](https://github.com/dayhaysoos/gatsby-theme-stripe/tree/master/packages/gatsby-theme-stripe-storefront)

# Usage

The idea is to be able to quickly set up a bare-minimum e-commerce page using your Stripe API keys.

You can get your Stripe API keys here:

[https://dashboard.stripe.com/apikeys](https://dashboard.stripe.com/apikeys)

Be sure to set up environment variables at the root of the project so you can hide your secret keys:

`.env.development`

```
STRIPE_API_SECRET=SECRET_KEY_HERE
STRIPE_API_PUBLIC=PUBLIC_KEY_HERE

```

To get your Stripe products running to display in this starter, you need to pass your Stripe API Public key to the `gatsby-config.js` file:

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
      },
    },
  ],
}

```

Your secret key will already get passed to the gatsby-node file by `gatsby-theme-stripe-storefront`

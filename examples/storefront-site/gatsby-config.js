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

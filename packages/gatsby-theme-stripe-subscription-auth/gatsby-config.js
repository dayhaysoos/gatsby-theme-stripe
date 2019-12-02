module.exports = {
  plugins: [
    {
      resolve: 'gatsby-theme-stripe-subscription',
      options: {
        stripePublicKey: process.env.STRIPE_API_PUBLIC,
      },
    },
  ],
}

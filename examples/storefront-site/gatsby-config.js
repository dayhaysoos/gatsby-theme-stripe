require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`
});

module.exports = {
  plugins: [
    "gatsby-theme-stripe-storefront",
    {
      resolve: "gatsby-theme-stripe-base",
      options: {
        stripePublicKey: process.env.STRIPE_API_PUBLIC
      }
    }
  ]
};

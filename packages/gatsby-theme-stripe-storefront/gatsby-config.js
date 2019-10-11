require('dotenv').config()

module.exports = {
  plugins: [
    'gatsby-plugin-theme-ui',
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-react-helmet`,
    'gatsby-plugin-stripe',
    {
      resolve: 'gatsby-theme-stripe-base',
      options: {
        stripePublicKey: process.env.STRIPE_API_PUBLIC,
      },
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'pages',
        path: `${__dirname}/src/pages/`,
      },
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'images',
        path: `${__dirname}/src/images/`,
      },
    },
    {
      resolve: `gatsby-plugin-material-ui`,
      options: {
        stylesProvider: {
          injectFirst: true,
        },
      },
    },
    {
      resolve: `gatsby-plugin-page-creator`,
      options: {
        path: `${__dirname}/src/pages`,
      },
    },
  ],
  siteMetadata: {
    title: 'Gatsby Theme Stripe Base',
    titleTemplate: 'Gatsby Theme Stripe Base',
    description: 'JAMStack solutions for your e-commerce Stripe stores!',
    url: 'https://www.twitter.com/dayhaysoos', // No trailing slash allowed!
    image: '../images/logo.jpeg',
    socialAccounts: [
      {
        platform: 'twitter',
        url: 'wwww.twitter.com/dayhaysoos',
        userName: '@dayhaysoos',
      },
      {
        platform: 'instagram',
        url: 'https://www.instagram.com/dayhaysoos',
        userName: '@dayhaysoos',
      },
    ],
  },
}

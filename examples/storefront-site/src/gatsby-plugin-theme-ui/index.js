import merge from 'deepmerge'
import baseTheme from 'gatsby-theme-stripe-storefront/src/gatsby-plugin-theme-ui'

export default merge(baseTheme, {
  colors: {
    primaryText: 'white',
  },
})

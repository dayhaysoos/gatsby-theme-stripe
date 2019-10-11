import merge from 'deepmerge'
import baseTheme from 'gatsby-theme-stripe-storefront/src/gatsby-plugin-theme-ui'

export default merge(baseTheme, {
  colors: {
    primary: baseTheme.colors.primary,
    secondary: baseTheme.colors.secondary,
    accdent: baseTheme.colors.accent,
  },
})

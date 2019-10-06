const React = require('react')
const { CartProvider } = require('./src/context/shopping-cart')

exports.wrapRootElement = ({ element }, { stripePublicKey }) => {
  const isBrowser = typeof window !== 'undefined'

  let stripe = isBrowser ? window.Stripe(stripePublicKey) : null

  return <CartProvider stripe={stripe}>{element}</CartProvider>
}

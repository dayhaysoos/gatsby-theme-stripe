const React = require('react')
const { CartProvider } = require('./src/context/shopping-cart')
const { StripeProvider } = require('react-stripe-elements')

export const wrapRootElement = ({ element }, { stripePublicKey }) => {
  const isBrowser = typeof window !== 'undefined'

  let stripe = isBrowser ? window.Stripe(stripePublicKey) : null

  return (
    <StripeProvider apiKey={stripePublicKey}>
      <CartProvider stripe={stripe}>{element}</CartProvider>
    </StripeProvider>
  )
}

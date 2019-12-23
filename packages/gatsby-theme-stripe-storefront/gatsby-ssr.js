const React = require('react')
const { CartProvider } = require('./src/context/shopping-cart')

export const wrapRootElement = (
  { element },
  { stripePublicKey, billingAddressCollection }
) => {
  const isBrowser = typeof window !== 'undefined'

  let stripe = isBrowser ? window.Stripe(stripePublicKey) : null

  return (
    <CartProvider
      billingAddressCollection={billingAddressCollection}
      stripe={stripe}
    >
      {element}
    </CartProvider>
  )
}

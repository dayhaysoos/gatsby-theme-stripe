const React = require('react')
const { CartProvider } = require('use-shopping-cart')
const { loadStripe } = require('@stripe/stripe-js')

const stripePromise = loadStripe(process.env.STRIPE_API_PUBLIC)

export const wrapRootElement = (
  { element },
  { stripePublicKey, billingAddressCollection, successUrl, cancelUrl }
) => {
  return (
    <CartProvider
      stripe={stripePromise}
      successUrl={successUrl}
      cancelUrl={cancelUrl}
      currency="USD"
      allowedCountries={['US', 'GB', 'CA']}
      billingAddressCollection={true}
      mode="client-only"
    >
      {element}
    </CartProvider>
  )
}

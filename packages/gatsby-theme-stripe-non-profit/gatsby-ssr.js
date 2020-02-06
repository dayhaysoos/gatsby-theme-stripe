const React = require('react')
const { DonateProvider } = require('./src/context/donate')

export const wrapRootElement = (
  { element },
  { stripePublicKey, billingAddressCollection, successUrl, cancelUrl }
) => {
  const isBrowser = typeof window !== 'undefined'

  let stripe = isBrowser ? window.Stripe(stripePublicKey) : null

  return (
    <DonateProvider
      stripe={stripe}
      successUrl={successUrl}
      cancelUrl={cancelUrl}
    >
      {element}
    </DonateProvider>
  )
}

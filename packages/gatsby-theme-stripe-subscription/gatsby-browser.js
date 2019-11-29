const React = require('react')
const { SubscriptionProvider } = require('./src/context/subscription')

export const wrapRootElement = ({ element }, { stripePublicKey }) => {
  const isBrowser = typeof window !== 'undefined'

  let stripe = isBrowser ? window.Stripe(stripePublicKey) : null

  return <SubscriptionProvider stripe={stripe}>{element}</SubscriptionProvider>
}

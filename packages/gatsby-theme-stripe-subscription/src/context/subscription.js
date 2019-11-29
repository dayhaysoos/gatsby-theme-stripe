import React, { createContext, useReducer, useContext } from 'react'
import { useStaticQuery, graphql } from 'gatsby'

const reducer = (subscription, action) => {
  const { lastClicked } = subscription
  const { plan } = action

  switch (action.type) {
    case 'storeLastClicked':
      return {
        ...subscription,
        lastClicked: {
          ...plan,
        },
      }

    case 'isPaying':
      return {
        ...subscription,
        isPaying: true,
      }

    default:
      console.error(`unknown action ${action.type}`)
      return subscription
  }
}

const SubscriptionContext = createContext()

export const SubscriptionProvider = ({ children, stripe }) => (
  <SubscriptionContext.Provider
    value={useReducer(reducer, {
      lastClicked: {},
      isPaying: false,
      stripe,
    })}
  >
    {children}
  </SubscriptionContext.Provider>
)

export const useSubscription = () => {
  const stripePlans = useStaticQuery(graphql`
    {
      allStripePlan {
        nodes {
          currency
          created
          billing_scheme
          amount_decimal
          amount
          name
          interval
          interval_count
          livemode
          nickname
          number_amount
          object
          planID
          product
          slug
          tiers_mode
          transform_usage {
            divide_by
            id
            round
          }
          trial_period_days
          usage_type
          aggregate_usage
          active
        }
      }
    }
  `)

  const [subscription, dispatch] = useContext(SubscriptionContext)
  const { stripe } = subscription

  const { lastClicked, isPaying } = subscription

  const redirectToPlanCheckout = async (planID, quantity) => {
    const { error } = await stripe.redirectToCheckout({
      items: [{ plan: planID, quantity }],
      successUrl: `http://localhost:8000/`,
      cancelUrl: `http://localhost:8000/`,
    })
  }

  const redirectToSkuCheckout = async sku => {
    const { error } = await stripe.redirectToCheckout({
      items: [{ sku, quantity: 1 }],
      successUrl: `http://localhost:8000/`,
      cancelUrl: `http://localhost:8000/`,
    })
  }

  const storeLastClicked = plan => dispatch({ type: 'storeLastClicked', plan })

  const handlePaymentClick = plan => dispatch({ type: 'isPaying' })

  const allStripePlan = stripePlans.allStripePlan.nodes

  return {
    subscription,
    storeLastClicked,
    lastClicked,
    redirectToPlanCheckout,
    redirectToSkuCheckout,
    isPaying,
    handlePaymentClick,
    allStripePlan,
  }
}

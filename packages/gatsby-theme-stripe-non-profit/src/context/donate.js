import React, { createContext, useReducer, useContext } from 'react'

const reducer = (donate, action) => {
  const { lastClicked } = donate
  const { plan } = action

  switch (action.type) {
    case 'storeLastClicked':
      return {
        ...donate,
        lastClicked: {
          ...plan,
        },
      }

    case 'isPaying':
      return {
        ...donate,
        isPaying: true,
      }

    default:
      console.error(`unknown action ${action.type}`)
      return donate
  }
}

const DonateContext = createContext()

export const DonateProvider = ({ children, stripe }) => (
  <DonateContext.Provider
    value={useReducer(reducer, {
      lastClicked: {},
      isPaying: false,
      stripe,
    })}
  >
    {children}
  </DonateContext.Provider>
)

export const useDonate = () => {
  const [donate, dispatch] = useContext(DonateContext)
  const { stripe } = donate

  const { lastClicked, isPaying } = donate

  const redirectToPlanCheckout = async () => {
    const { error } = await stripe.redirectToCheckout({
      items: [{ plan: lastClicked.planID, quantity: 1 }],
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

  return {
    donate,
    storeLastClicked,
    lastClicked,
    redirectToPlanCheckout,
    redirectToSkuCheckout,
    isPaying,
    handlePaymentClick,
  }
}

import React, { createContext, useReducer, useContext } from 'react'

const reducer = (donate, action) => {
  const { lastClickedItem } = action

  switch (action.type) {
    case 'storeLastClicked':
      return {
        ...donate,
        lastClicked: {
          lastClickedItem,
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
    console.log('derp', lastClicked)
    const { error } = await stripe.redirectToCheckout({
      items: [{ plan: lastClicked.lastClickedItem, quantity: 1 }],
      successUrl: `http://localhost:8000/`,
      cancelUrl: `http://localhost:8000/`,
    })
  }

  const redirectToSkuCheckout = async sku => {
    const { error } = await stripe.redirectToCheckout({
      items: [{ sku: sku.lastClickedItem, quantity: 1 }],
      successUrl: `http://localhost:8000/`,
      cancelUrl: `http://localhost:8000/`,
    })
  }

  const storeLastClicked = lastClickedItem =>
    dispatch({ type: 'storeLastClicked', lastClickedItem })

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

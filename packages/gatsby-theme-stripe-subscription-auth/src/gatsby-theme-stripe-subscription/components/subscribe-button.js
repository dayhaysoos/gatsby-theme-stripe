import React, { useState } from 'react'
import { navigate } from 'gatsby'
import SubscribeButton from 'gatsby-theme-stripe-subscription/src/components/subscribe-button'
import { useAuth, auth } from 'gatsby-theme-firebase'
import { useSubscription } from 'gatsby-theme-stripe-subscription/src/context/subscription'

export default props => {
  const { isLoggedIn } = useAuth()
  const { redirectToPlanCheckout } = useSubscription()

  return (
    <SubscribeButton
      {...props}
      handleClick={
        isLoggedIn
          ? () =>
              redirectToPlanCheckout(props.planID, 1, auth.currentUser.email)
          : () => navigate('/login')
      }
    />
  )
}

import React from 'react'
import {
  auth,
  useAuth,
  firestore,
  useFirestoreQuery,
} from 'gatsby-theme-firebase'
import { useSubscription } from 'gatsby-theme-stripe-subscription/src/context/subscription'
import SubscriptionList from 'gatsby-theme-stripe-subscription/src/components/subscription-list'

const SubscriptionPage = () => {
  const { isLoggedIn } = useAuth()
  const { allStripePlan } = useSubscription()

  const [users, isLoading] = useFirestoreQuery(
    firestore.collection('users').get()
  )

  return (
    <section>
      {isLoggedIn ? 'Welcome' : 'Log in pls'}
      <SubscriptionList allStripePlan={allStripePlan} />
    </section>
  )
}

export default SubscriptionPage

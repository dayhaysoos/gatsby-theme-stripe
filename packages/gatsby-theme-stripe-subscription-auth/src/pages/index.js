import React, { useEffect, useState } from 'react'
import {
  auth,
  useAuth,
  firestore,
  useFirestoreQuery,
} from 'gatsby-theme-firebase'
import { useSubscription } from 'gatsby-theme-stripe-subscription/src/context/subscription'
import SubscriptionList from 'gatsby-theme-stripe-subscription/src/components/subscription-list'
import ContentProtector from '../components/content-protector'
import { navigate } from 'gatsby'

const SubscriptionPage = () => {
  const { isLoggedIn } = useAuth()
  const { allStripePlan } = useSubscription()
  const [user, setUsers] = useState()

  useEffect(() => {
    if (!user && auth.currentUser) {
      const userData = firestore
        .collection('users')
        .where('email', '==', auth.currentUser.email)
        .get()
        .then(snapshot => {
          snapshot.forEach(doc => setUsers(doc.data()))
        })
    }
  })



  return (
    <section>
      {isLoggedIn ? `Welcome ${auth.currentUser.displayName}` : 'Log in pls'}
      {isLoggedIn ? (
        <button onClick={() => auth.signOut()}>Log out</button>
      ) : (
        <button onClick={() => navigate('/login')}>Log in</button>
      )}

      <SubscriptionList allStripePlan={allStripePlan} />
      <ContentProtector
        guardMessage={'Please Subscribe to see content'}
        shouldShow={user && user.plan === 'Gold'}
      >
        <h2>Showing some really good content</h2>
      </ContentProtector>
    </section>
  )
}

export default SubscriptionPage

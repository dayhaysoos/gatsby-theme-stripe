import React from 'react'
import SubscriptionList from '../components/subscription-list'
import { useSubscription } from '../context/subscription'

const Home = () => {
  const { allStripePlan } = useSubscription()
  return (
    <div>
      <SubscriptionList allStripePlan={allStripePlan} />
    </div>
  )
}

export default Home

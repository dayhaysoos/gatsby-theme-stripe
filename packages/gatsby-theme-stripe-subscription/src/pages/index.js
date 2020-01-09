/** @jsx jsx */
import { jsx } from 'theme-ui'
import SubscriptionList from '../components/subscription-list'
import { useSubscription } from '../context/subscription'

const Home = () => {
  const { allStripePlan, redirectToPlanCheckout } = useSubscription()
  return <SubscriptionList allStripePlan={allStripePlan} />
}

export default Home

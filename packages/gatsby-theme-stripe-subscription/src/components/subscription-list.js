/** @jsx jsx */
import { jsx } from 'theme-ui'
import { Container } from '@material-ui/core'
import ProductCard from '../components/product-card'

const SubscriptionList = ({ allStripePlan }) => {
  return (
    <Container
      sx={{
        backgroundColor: 'background',
        display: 'flex',
        flexFlow: 'row wrap',
        justifyContent: 'flex-start',
        '@media (max-width: 600px)': {
          justifyContent: 'center',
        },
      }}
    >
      {allStripePlan.map(plan => {
        return <ProductCard plan={plan} />
      })}
    </Container>
  )
}

export default SubscriptionList

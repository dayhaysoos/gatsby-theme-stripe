/** @jsx jsx */
import { jsx } from 'theme-ui'
import { Elements, CardElement, injectStripe } from 'react-stripe-elements'
import { Container } from '@material-ui/core'
import { useCart } from '../context/shopping-cart'
import { useStaticQuery } from 'gatsby'

const __CardForm = ({ stripe, elements }) => {
  const handleSubmit = ev => {
    ev.preventDefault()
    if (stripe) {
      stripe.createToken().then(payload => console.log('[token]', payload))
    } else {
      console.log("Stripe.js hasn't loaded yet.")
    }
  }

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Card details
        <CardElement />
      </label>
      <button>Pay</button>
    </form>
  )
}

const CardForm = injectStripe(__CardForm)

const Checkout = () => {
  const { checkoutData } = useCart()

  console.log('checkout data', checkoutData)

  return (
    <Container
      maxWidth={'lg'}
      sx={{
        display: 'flex',
        justifyContent: 'center',
      }}
    >
      <Container>Products</Container>
      <Container>
        <Elements>
          <CardForm />
        </Elements>
      </Container>
    </Container>
  )
}

export default Checkout

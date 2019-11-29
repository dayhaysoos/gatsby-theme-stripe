/** @jsx jsx */
import { jsx } from 'theme-ui'
import { Button } from '@material-ui/core'
import { useSubscription } from '../context/subscription'

const SubscribeButton = ({ planID, quantity = 1 }) => {
  const { redirectToPlanCheckout } = useSubscription()
  return (
    <Button
      onClick={() => redirectToPlanCheckout(planID, quantity)}
      sx={{
        backgroundColor: 'primary',
        color: 'white',
        width: '50%',
        height: '50px',
        fontSize: '3',
        marginBottom: '30px',
        '&:hover': {
          backgroundColor: 'secondary',
        },
      }}
      variant="contained"
    >
      Subscribe
    </Button>
  )
}

export default SubscribeButton

/** @jsx jsx */
import { jsx } from 'theme-ui'
import { Button } from '@material-ui/core'
import { useSubscription } from '../context/subscription'

const SubscribeButton = ({ planID, quantity = 1, handleClick }) => {
  const { redirectToPlanCheckout } = useSubscription()

  const handleRedirect = () => {
    if (!handleClick) {
      return redirectToPlanCheckout(planID, quantity)
    } else {
      return handleClick()
    }
  }
  return (
    <Button
      onClick={handleRedirect}
      sx={{
        backgroundColor: 'primary',
        color: 'white',
        minWidth: '50%',
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

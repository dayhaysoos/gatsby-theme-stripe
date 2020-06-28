/** @jsx jsx */
import { jsx } from 'theme-ui'
import { useShoppingCart, formatCurrencyString } from 'use-shopping-cart'
import ShoppingCartDetails from './right-pane/shopping-cart-details'
import { Button } from '@material-ui/core'

const RightPane = () => {
  const {
    handleCartClick,
    redirectToCheckout,
    cartCount,
    shouldDisplayCart,
  } = useShoppingCart()
  return (
    <div
      aria-hidden={shouldDisplayCart ? 'false' : 'true'}
      css={{ overflowY: 'scroll', display: 'flex', flexDiretion: 'row' }}
    >
      <aside
        sx={{
          variant: shouldDisplayCart
            ? 'aside.rightPaneShow'
            : 'aside.rightPaneHidden',
        }}
      >
        <ShoppingCartDetails />
        <div
          css={{
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'space-evenly',
            alignItems: 'center',
          }}
        >
          <Button
            variant={'contained'}
            color={'primary'}
            sx={{ variant: 'button.cart' }}
            onClick={handleCartClick}
          >
            Close
          </Button>
          <Button
            arial-label={`Go to Stripe Checkout`}
            variant={'contained'}
            sx={{
              variant: cartCount > 0 ? 'button.cart' : 'button.disabled',
            }}
            onClick={() => redirectToCheckout()}
          >
            Checkout
          </Button>
        </div>
      </aside>
    </div>
  )
}

export default RightPane

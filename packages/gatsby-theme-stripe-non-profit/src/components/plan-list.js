/** @jsx jsx */
import { jsx, Grid, Button } from 'theme-ui'
import { formatPrice } from '../util/formatPrice'
import { useDonate } from '../context/donate'

const PlanList = ({ plans }) => {
  const {
    storeLastClicked,
    lastClicked,
    isPaying,
    redirectToPlanCheckout,
    handlePaymentClick,
  } = useDonate()

  return (
    <section
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
      }}
    >
      <Grid gap={2} columns={3} sx={{ width: 380, marginBottom: '20px' }}>
        {plans.map(plan => (
          <Button
            color={
              lastClicked.lastClickedItem === plan.planID ? 'white' : 'gray'
            }
            type={'submit'}
            onClick={() => storeLastClicked(plan.planID)}
            sx={{
              variant:
                lastClicked.lastClickedItem === plan.planID
                  ? 'planList.button.lastClicked'
                  : 'planList.button.notClicked',
            }}
            key={plan.id}
          >
            <p sx={{ margin: 0 }}>
              {formatPrice({ price: plan.amount, currency: plan.currency })}
            </p>
            <span>{plan.currency}</span>
          </Button>
        ))}
      </Grid>
      <Button
        mt={20}
        onClick={() => redirectToPlanCheckout(lastClicked)}
        sx={{ color: 'text', bg: 'primary' }}
      >
        Donate Monthly
      </Button>
    </section>
  )
}

export default PlanList

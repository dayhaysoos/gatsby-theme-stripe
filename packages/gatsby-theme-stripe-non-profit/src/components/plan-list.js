/** @jsx jsx */
import React from 'react'
import { jsx } from 'theme-ui'
import { Formik, Field } from 'formik'
import { useDonate } from '../context/donate'

const formatPrice = price => price.toString().slice(0, -2)

const PlanList = ({ plans }) => {
  const {
    storeLastClicked,
    lastClicked,
    isPaying,
    redirectToPlanCheckout,
    handlePaymentClick,
  } = useDonate()

  return (
    <main sx={{ variant: 'planList.main' }}>
      <div sx={{ variant: 'planList.div' }}>
        {plans.map(plan => (
          <button
            type={'submit'}
            onClick={() => storeLastClicked(plan)}
            sx={{
              variant:
                lastClicked.planID === plan.planID
                  ? 'planList.button.lastClicked'
                  : 'planList.button',
            }}
            key={plan.id}
          >
            {`$${formatPrice(plan.amount)}`}
          </button>
        ))}
      </div>
      <button
        onClick={() => redirectToPlanCheckout(lastClicked)}
        sx={{ variant: 'planList.button.donateSubmit' }}
      >
        Donate Monthly
      </button>
    </main>
  )
}

export default PlanList

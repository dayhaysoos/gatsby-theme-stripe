/** @jsx jsx */
import { jsx } from 'theme-ui'
import { Formik, Field } from 'formik'
import { formatPrice } from '../util/formatPrice'
import { useDonate } from '../context/donate'

const DonateList = ({ skus }) => {
  const { storeLastClicked, lastClicked, redirectToSkuCheckout } = useDonate()
  console.log('skews', skus)
  return (
    <section>
      <h1>Donate list</h1>
      <div sx={{ variant: 'planList.div' }}>
        {skus.map(sku => (
          <button
            type={'submit'}
            onClick={() => storeLastClicked(sku.skuID)}
            sx={{
              variant:
                lastClicked === sku.skuID
                  ? 'planList.button.lastClicked'
                  : 'planList.button',
            }}
            key={sku.id}
          >
            {`$${sku.price}`}
          </button>
        ))}
      </div>
      <button
        onClick={() => redirectToSkuCheckout(lastClicked)}
        sx={{ variant: 'planList.button.donateSubmit' }}
      >
        Donate Once
      </button>
    </section>
  )
}

export default DonateList

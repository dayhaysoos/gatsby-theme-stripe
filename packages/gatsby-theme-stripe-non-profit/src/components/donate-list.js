/** @jsx jsx */
import { jsx, Grid, Button } from 'theme-ui'
import { formatPrice } from '../util/formatPrice'
import { useDonate } from '../context/donate'

const DonateList = ({ skus }) => {
  const { storeLastClicked, lastClicked, redirectToSkuCheckout } = useDonate()

  return (
    <section
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
      }}
    >
      <Grid gap={2} columns={3} sx={{ width: 380, marginBottom: '20px' }}>
        {skus.map(sku => (
          <Button
            color={lastClicked.lastClickedItem === sku.skuID ? 'white' : 'gray'}
            mr={2}
            key={sku.id}
            type={'submit'}
            onClick={() => storeLastClicked(sku.skuID)}
            sx={{
              variant:
                lastClicked.lastClickedItem === sku.skuID
                  ? 'planList.button.lastClicked'
                  : 'planList.button.notClicked',
            }}
          >
            <p sx={{ margin: 0 }}>
              {formatPrice({ price: sku.price, currency: sku.currency })}
            </p>
            <span>{sku.currency}</span>
          </Button>
        ))}
      </Grid>
      <Button
        mt={20}
        onClick={() => redirectToSkuCheckout(lastClicked)}
        sx={{ color: 'text', bg: 'primary' }}
      >
        Donate Once
      </Button>
    </section>
  )
}

export default DonateList

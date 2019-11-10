/** @jsx jsx */
import { jsx } from 'theme-ui'
import AddItemButton from './add-item-button'
import SkuImage from './sku-list/sku-image'
import Card from '@material-ui/core/Card'
import CardContent from '@material-ui/core/CardContent'
import { useCart } from '../context/shopping-cart'

const SkuList = () => {
  const skus = []

  return (
    <section sx={{ variant: 'ul.skuList' }}>
      {skus.map(sku => {
        const { localImage, name, skuID, price } = sku

        return (
          <Card key={skuID} sx={{ variant: 'li.purchaseItem', border: 'none' }}>
            <CardContent>
              <section sx={{ variant: 'section.itemDetails' }}>
                <div
                  sx={{
                    maxHeight: '200px',
                    height: '200px',
                    marginBottom: '20px',
                  }}
                >
                  <SkuImage size={200} image={localImage} name={name} />
                </div>
                <p
                  sx={{
                    color: 'secondaryText',
                    fontWeight: 600,
                    letterSpacing: '2px',
                  }}
                >
                  {name}
                </p>
                <p
                  sx={{
                    color: 'secondaryText',
                    fontWeight: 600,
                    letterSpacing: '2px',
                  }}
                >
                  {price}
                </p>
              </section>
              <section
                sx={{ variant: 'section.buttonWrapper', marginTop: '20px' }}
              >
                <AddItemButton sku={sku} />
              </section>
            </CardContent>
          </Card>
        )
      })}
    </section>
  )
}

export default SkuList

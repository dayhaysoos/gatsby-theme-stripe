/** @jsx jsx */
import { jsx } from 'theme-ui'
import { Container, Card, CardMedia, CardContent } from '@material-ui/core'
import { useCart } from '../context/shopping-cart'
import ProductForm from './product-form'
import AddItemButton from '../components/add-item-button'

const Product = ({
  slug,
  attributes,
  caption,
  description,
  images,
  skus,
  shippable,
  name,
  type,
}) => {
  const { addItem, stripe } = useCart()

  return (
    <Container sx={{ display: 'flex' }}>
      <Container key={slug}>
        <CardMedia sx={{ height: '300px', width: '300px' }} image={images[0]} />
      </Container>
      <Container>
        <p>{name}</p>
        <p>{description}</p>
        <p>{skus[0].price}</p>
        <p>{caption}</p>
        <AddItemButton sku={{ skuID: skus[0].skuID }} />
      </Container>
    </Container>
  )
}

export default Product

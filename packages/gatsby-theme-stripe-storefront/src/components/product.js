/** @jsx jsx */
import { jsx } from 'theme-ui'
import { Container, Card, CardMedia, CardContent } from '@material-ui/core'
import ProductForm from '../components/product-list/product-form'

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
  return (
    <Container sx={{ display: 'flex' }}>
      <Container key={slug}>
        <CardMedia sx={{ height: '300px', width: '300px' }} image={images[0]} />
      </Container>
      <Container>
        <p>{name}</p>
        <p>{description}</p>
        <p>{skus[0].price}</p>
        <ProductForm skus={skus} />
        <p>{caption}</p>
      </Container>
    </Container>
  )
}

export default Product

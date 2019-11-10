/** @jsx jsx */
import { jsx } from 'theme-ui'
import { useStaticQuery, graphql, navigate } from 'gatsby'
import {
  Container,
  FormControl,
  Card,
  CardMedia,
  CardContent,
  Select,
  MenuItem,
  InputLabel,
  CardActionArea,
} from '@material-ui/core'

const ProductList = () => {
  const data = useStaticQuery(graphql`
    {
      allStripeProduct {
        nodes {
          attributes
          slug
          skus {
            attributes {
              color
              gender
              size
            }
            inventory {
              quantity
              type
            }
            image
            name
            price
            skuID
          }
          caption
          name
          images
        }
      }
    }
  `)

  return (
    <Container>
      {data.allStripeProduct.nodes.map(product => {
        return (
          <Card key={product.slug}>
            <CardActionArea onClick={() => navigate(product.slug)}>
              <CardMedia
                sx={{ height: '100px', width: '100px' }}
                image={product.images[0]}
              />
              <CardContent>
                <p>{product.name}</p>
                <p>{product.caption}</p>
                <p>{product.skus[0].price}</p>
              </CardContent>
            </CardActionArea>
          </Card>
        )
      })}
    </Container>
  )
}

export default ProductList

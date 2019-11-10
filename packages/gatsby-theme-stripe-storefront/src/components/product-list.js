/** @jsx jsx */
import { jsx } from 'theme-ui'
import { useStaticQuery, graphql } from 'gatsby'
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

import ProductForm from '../components/product-list/product-form'

const ProductList = () => {
  const data = useStaticQuery(graphql`
    {
      allStripeProduct {
        nodes {
          attributes
          skus {
            attributes {
              color
              gender
              size
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

  //   const skuAttributes = useStaticQuery(graphql`
  //     {
  // allStripeSku {
  //   nodes {
  //     attributes {
  //       color
  //       gender
  //       size
  //     }
  //   }
  // }
  //     }
  //   `)

  //   console.log(skuAttributes)

  return (
    <Container>
      {data.allStripeProduct.nodes.map(product => {
        return (
          <Card>
            <CardActionArea>
              <CardMedia
                sx={{ height: '100px', width: '100px' }}
                image={product.images[0]}
              />
              <CardContent>
                <p>{product.name}</p>
                <p>{product.caption}</p>
              </CardContent>
            </CardActionArea>
          </Card>
        )
      })}
    </Container>
  )
}

export default ProductList

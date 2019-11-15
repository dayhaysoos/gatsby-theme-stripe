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
  Grid,
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
    <Grid container sx={{ flexGrow: 1 }} spacing={2}>
      <Grid item sx={{ padding: '8px' }} xs={12}>
        <Grid container justify="center" spacing={5}>
          {data.allStripeProduct.nodes.map(product => {
            return (
              <Grid key={product.slug} item>
                <Card>
                  <CardActionArea
                    sx={{ height: '500px', width: '300px' }}
                    onClick={() => navigate(product.slug)}
                  >
                    <CardMedia
                      sx={{ height: '300px', width: '300px' }}
                      image={product.images[0]}
                    />
                    <CardContent>
                      <p sx={{ fontSize: '18px', textAlign: 'center' }}>
                        {product.name}
                      </p>
                      <p sx={{ fontSize: '18px', textAlign: 'center' }}>
                        {product.caption}
                      </p>
                      <p
                        sx={{
                          fontSize: '18px',
                          fontWeight: 'bold',
                          textAlign: 'center',
                          marginBottom: '10px',
                        }}
                      >
                        {product.skus[0].price}
                      </p>
                    </CardContent>
                  </CardActionArea>
                </Card>
              </Grid>
            )
          })}
        </Grid>
      </Grid>
    </Grid>
  )
}

export default ProductList

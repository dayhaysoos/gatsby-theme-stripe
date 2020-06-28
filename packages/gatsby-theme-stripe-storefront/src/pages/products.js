/** @jsx jsx */
import { jsx, Grid, Box, Button, Card, Image } from 'theme-ui'
import Layout from '../components/layout'
import { graphql, Link } from 'gatsby'
import { formatCurrencyString } from 'use-shopping-cart'

export const query = graphql`
  {
    allProduct {
      nodes {
        description
        name
        productID
        images
        slug
        fields {
          price {
            unit_amount
          }
        }
      }
    }
  }
`

const Products = ({ data }) => {
  const products = data.allProduct.nodes

  return (
    <Layout>
      <Grid as="section" columns={[1, 2, 4]}>
        {products.map((product) => {
          const { slug } = product

          return (
            <Card key={product.id} as="article">
              <Link to={slug}>
                {product.images && <Image src={product.images[0]} />}

                <h4>{product.name}</h4>
                <p>{product.description}</p>
                <p>
                  {formatCurrencyString({
                    value: product.fields.price.unit_amount,
                    currency: 'usd',
                  })}
                </p>
              </Link>
            </Card>
          )
        })}
      </Grid>
    </Layout>
  )
}

export default Products

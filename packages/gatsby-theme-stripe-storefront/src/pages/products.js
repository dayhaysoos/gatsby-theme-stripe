/** @jsx jsx */
import { jsx, Grid, Box, Button, Card, Image, Flex } from 'theme-ui'
import Layout from '../components/layout'
import { graphql, Link } from 'gatsby'
import { formatCurrencyString } from 'use-shopping-cart'
import Img from 'gatsby-image'

export const query = graphql`
  {
    allProduct {
      nodes {
        description
        name
        productID
        images
        slug
        childFile {
          childImageSharp {
            id
            fluid(quality: 100, maxHeight: 200) {
              base64
              tracedSVG
              srcWebp
              srcSetWebp
              originalImg
              originalName
              ...GatsbyImageSharpFluid
              ...GatsbyImageSharpFluidLimitPresentationSize
            }
          }
        }
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
          const { slug, childFile } = product

          return (
            <Card sx={{ padding: 20 }} key={product.id} as="article">
              <Link sx={{ height: '300px' }} to={slug}>
                {product.images && (
                  <Img fluid={childFile.childImageSharp.fluid} />
                )}
                <Box>
                  <h4>{product.name}</h4>
                  {product.description && <p>{product.description}</p>}
                  <p>
                    {formatCurrencyString({
                      value: product.fields.price.unit_amount,
                      currency: 'usd',
                    })}
                  </p>
                </Box>
              </Link>
            </Card>
          )
        })}
      </Grid>
    </Layout>
  )
}

export default Products

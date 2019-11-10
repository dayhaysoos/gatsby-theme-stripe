import React from 'react'
import Layout from '../components/layout'
import Product from '../components/product'
import { graphql } from 'gatsby'

export const query = graphql`
  query($slug: String!) {
    stripeProduct(slug: { eq: $slug }) {
      slug
      images
      description
      name
      type
      shippable
      caption
      attributes
      skus {
        attributes {
          color
          gender
          size
        }
        inventory {
          type
          quantity
        }
        image
        name
        price
        skuID
        product
      }
    }
  }
`

const ProductPage = ({ data: { stripeProduct } }) => {
  return (
    <Layout>
      <Product {...stripeProduct} />
    </Layout>
  )
}

export default ProductPage

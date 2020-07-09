import React from 'react'
import { graphql } from 'gatsby'
import Product from '../components/product'
import Layout from '../components/layout'

export const query = graphql`
  query($slug: String!) {
    product(slug: { eq: $slug }) {
      description
      name
      productID
      images
      price
      childFile {
        childImageSharp {
          id
          fluid {
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
          priceID
        }
      }
    }
  }
`

const ProductTemplate = ({ data }) => {
  return (
    <Layout>
      <Product product={data.product} />
    </Layout>
  )
}

export default ProductTemplate

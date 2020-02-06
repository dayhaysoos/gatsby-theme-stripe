import React from 'react'
import { graphql } from 'gatsby'
import Layout from '../components/layout'
import Sku from '../components/sku'

export const query = graphql`
  query($slug: String!) {
    stripeSku(slug: { eq: $slug }) {
      price
      name
      price
      product
      image
      product
      skuID
    }
  }
`

const SkuTemplate = ({ data: { stripeSku } }) => (
  <Layout>
    <Sku {...stripeSku} />
  </Layout>
)

export default SkuTemplate

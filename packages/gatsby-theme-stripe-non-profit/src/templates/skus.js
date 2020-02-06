import React from 'react'
import { graphql, useStaticQuery } from 'gatsby'
import Layout from '../components/layout'
import SkuList from '../components/sku-list'

const SkusTemplate = () => {
  const data = useStaticQuery(graphql`
    query {
      allStripeSku {
        nodes {
          name
          price
          currency
          slug
          image
          skuID
        }
      }
    }
  `)

  const skus = data.allStripeSku.nodes

  return (
    <Layout>
      <SkuList skus={skus} />
    </Layout>
  )
}

export default SkusTemplate

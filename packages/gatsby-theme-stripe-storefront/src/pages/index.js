/** @jsx jsx */
import React from 'react'
import { jsx } from 'theme-ui'
// import SkuList from '../components/sku-list'
import Layout from '../components/layout'
import ProductList from '../components/product-list'
import SEO from '../components/SEO'

const App = () => {
  return (
    <Layout>
      <SEO>
        <ProductList css={{ color: 'black' }} />
      </SEO>
    </Layout>
  )
}

export default App

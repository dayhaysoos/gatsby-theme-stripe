/** @jsx jsx */
import React from 'react'
import { jsx } from 'theme-ui'
import Layout from '../components/layout'
import SkuList from '../components/sku-list'
import SEO from '../components/SEO'

const App = () => {
  return (
    <Layout>
      <SEO>
        <SkuList />
      </SEO>
    </Layout>
  )
}

export default App

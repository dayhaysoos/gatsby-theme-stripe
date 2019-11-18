/** @jsx jsx */
import React from 'react'
import { jsx } from 'theme-ui'
import SkuList from '../components/sku-list'
import SEO from '../components/SEO'
import Copy from '../components/copy'
import Layout from '../components/layout'

const App = () => {
  return (
    <Layout>
      <SEO>
        <Copy copy={'Some really good fruit copy'} />
        <SkuList />
      </SEO>
    </Layout>
  )
}

export default App

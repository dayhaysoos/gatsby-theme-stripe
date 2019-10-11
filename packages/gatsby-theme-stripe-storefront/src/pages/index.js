/** @jsx jsx */
import React from 'react'
import { jsx } from 'theme-ui'
import Layout from '../components/layout'
import SkuList from '../components/sku-list'
import SEO from '../components/SEO'
import Copy from '../components/copy'

import strings from '../strings.json'

const App = () => {
  console.log(strings)
  return (
    <Layout>
      <Copy copy={strings.storefront} />
      <SEO>
        <SkuList />
      </SEO>
    </Layout>
  )
}

export default App

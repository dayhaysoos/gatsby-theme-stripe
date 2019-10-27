/** @jsx jsx */
import React from 'react'
import { jsx } from 'theme-ui'
import SkuList from '../components/sku-list'
import SEO from '../components/SEO'

const App = () => {
  return (
    <>
      <SEO>
        <SkuList />
      </SEO>
    </>
  )
}

export default App

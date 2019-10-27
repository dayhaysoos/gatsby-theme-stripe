/** @jsx jsx */
import React from 'react'
import { jsx } from 'theme-ui'
import SkuList from '../components/sku-list'
import SEO from '../components/SEO'
import RightPane from '../components/right-pane'

const App = () => {
  return (
    <>
      <SEO>
        <RightPane />
        <SkuList />
      </SEO>
    </>
  )
}

export default App

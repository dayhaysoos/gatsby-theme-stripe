/** @jsx jsx */
import React, { useState } from 'react'
import PaySelection from '../components/pay-selection'
import { useDonate } from '../context/donate'
import { Styled, jsx } from 'theme-ui'
import Layout from '../components/layout'

const DonateForm = () => {
  const [donateState, setState] = useState({
    isSubscribing: false,
  })

  const { isPaying, card } = useDonate()

  const { isSubscribing } = donateState

  return (
    <Layout>
      <PaySelection />
    </Layout>
  )
}

export default DonateForm

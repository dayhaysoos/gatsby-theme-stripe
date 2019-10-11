/** @jsx jsx */
import React from 'react'
import { jsx } from 'theme-ui'

const Logo = ({ logo }) => {
  return (
    <>
      <img css={{ height: '75px', width: '75px' }} src={logo} />
    </>
  )
}

export default Logo

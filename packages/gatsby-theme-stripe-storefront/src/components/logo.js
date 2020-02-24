/** @jsx jsx */
import React from 'react'
import { navigate } from 'gatsby'
import { jsx, Button } from 'theme-ui'

const Logo = ({ logo }) => {
  return (
    <Button label={'Home'} sx={{ backgroundColor: 'transparent' }}>
      <img
        alt={'company logo'}
        sx={{ height: '75px', width: '75px' }}
        src={logo}
        onClick={() => navigate('/')}
      />
    </Button>
  )
}

export default Logo

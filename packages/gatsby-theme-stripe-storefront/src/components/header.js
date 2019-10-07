/** @jsx jsx */
import React from 'react'
import { Header as ThemeHeader, jsx } from 'theme-ui'
import ShoppingCartIcon from './shopping-cart-icon'

const Header = () => (
  <ThemeHeader>
    <p>Gatsby Theme Stripe Base</p>
    <ShoppingCartIcon />
  </ThemeHeader>
)

export default Header

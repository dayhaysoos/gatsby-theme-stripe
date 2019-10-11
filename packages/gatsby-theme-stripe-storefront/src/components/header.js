/** @jsx jsx */
import React from 'react'
import { Header as ThemeHeader, jsx } from 'theme-ui'
import ShoppingCartIcon from './shopping-cart-icon'
import Logo from './logo'
import logo from '../images/logo.jpeg'

const Header = () => (
  <ThemeHeader>
    <Logo logo={logo} />
    <ShoppingCartIcon />
  </ThemeHeader>
)

export default Header

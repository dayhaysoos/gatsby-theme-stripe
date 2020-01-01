/** @jsx jsx */
import React from 'react'
import { Layout as ThemeLayout, Main, jsx } from 'theme-ui'
import Header from './header'
import RightPane from './right-pane'
import logo from '../images/logo.jpeg'

const Layout = ({ children }) => (
  <ThemeLayout>
    <Header links={['home', 'products', 'about']} logo={logo} />
    <RightPane />
    <Main>{children}</Main>
  </ThemeLayout>
)

export default Layout

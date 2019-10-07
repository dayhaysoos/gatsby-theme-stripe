/** @jsx jsx */
import React from 'react'
import { Layout as ThemeLayout, Main, jsx } from 'theme-ui'
import Header from './header'
import RightPane from './right-pane'

const Layout = ({ children }) => (
  <ThemeLayout>
    <Header />
    <RightPane />
    <Main>{children}</Main>
  </ThemeLayout>
)

export default Layout

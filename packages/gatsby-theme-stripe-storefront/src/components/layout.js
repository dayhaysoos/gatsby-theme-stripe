/** @jsx jsx */

import { Layout as ThemeLayout, Main, jsx } from 'theme-ui'
import Header from './header'
import RightPane from './right-pane'
import logo from '../images/logo.jpeg'
import Footer from './footer'

const Layout = ({ children }) => (
  <ThemeLayout>
    <Header links={['home', 'products', 'about']} logo={logo} />
    <RightPane />
    <Main>{children}</Main>
    <Footer />
  </ThemeLayout>
)

export default Layout

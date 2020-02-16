/** @jsx jsx */

import { jsx, Box } from 'theme-ui'
import Header from './header'
import RightPane from './right-pane'
import logo from '../images/logo.jpeg'
import Footer from './footer'

const Layout = ({ children }) => (
  <Box>
    <Header links={['home', 'products', 'about']} logo={logo} />
    <RightPane />
    <main>{children}</main>
    <Footer />
  </Box>
)

export default Layout

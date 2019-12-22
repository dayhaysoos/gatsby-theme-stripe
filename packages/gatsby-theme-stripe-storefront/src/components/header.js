/** @jsx jsx */
import { Header as ThemeHeader, jsx } from 'theme-ui'
import { Link } from 'gatsby';
import ShoppingCartIcon from './shopping-cart-icon'
import Logo from './logo'
import logo from '../images/logo.jpeg'

const Header = ({links}) => (
  <ThemeHeader>
    <Logo logo={logo} />
    {links.map(link => <Link sx={{color: 'text'}} to={link === 'home' ? '/' : link}>{link.toUpperCase()}</Link>)}
    <ShoppingCartIcon />
  </ThemeHeader>
)

export default Header

/** @jsx jsx */
import { Header as ThemeHeader, jsx } from 'theme-ui'
import { Link } from 'gatsby'
import ShoppingCartIcon from './shopping-cart-icon'

const Header = ({ links }) => (
  <ThemeHeader>
    {links.map(link => (
      <Link
        key={link}
        sx={{
          color: 'text',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
        }}
        to={link === 'home' ? '/' : link}
      >
        {link.toUpperCase()}
      </Link>
    ))}
    <ShoppingCartIcon />
  </ThemeHeader>
)

export default Header

/** @jsx jsx */
import { jsx, Box } from 'theme-ui'
import { useState } from 'react'
import { Link, navigate } from 'gatsby'
import ShoppingCartIcon from './shopping-cart-icon'
import { Menu, MenuItem, Button } from '@material-ui/core'
import { MdMenu } from 'react-icons/md'
import { useCart } from 'gatsby-theme-stripe-storefront/src/context/shopping-cart'
import Logo from '../components/logo'

const Header = ({ links, logo }) => {
  const { handleCloseCart } = useCart()
  const [anchorEl, setAnchorEl] = useState(null)

  const handleClick = e => {
    handleCloseCart()
    setAnchorEl(e.currentTarget)
  }

  const handleClose = () => {
    handleCloseCart()
    setAnchorEl(null)
  }

  const changeRoute = route => {
    handleCloseCart()
    navigate(route)
  }
  return (
    <Box
      sx={{
        color: 'primaryText',
        backgroundColor: 'primary',
        fontWeight: 'bold',
        margin: '0 auto',
        padding: 10,
        width: 'default',
        justifyContent: 'space-between',
      }}
    >
      <div
        sx={{
          display: 'flex',
          justifyContent: 'space-around',
          width: '100%',
          '@media(max-width: 675px)': {
            display: 'none',
          },
        }}
      >
        {links.map(link => (
          <Link
            key={link}
            sx={{
              color: 'primaryText',
              display: 'flex',
              alignItems: 'center',
            }}
            to={link === 'home' ? '/' : link}
          >
            {link.toUpperCase()}
          </Link>
        ))}
        <ShoppingCartIcon />
      </div>
      <div
        sx={{
          display: 'none',
          '@media(max-width: 675px)': {
            display: 'flex',
            justifyContent: 'space-between',
            width: '100%',
          },
        }}
      >
        <Button
          aria-controls="nav-menu"
          aria-haspopup="true"
          onClick={handleClick}
          sx={{
            color: 'primaryText',
          }}
        >
          <MdMenu sx={{ color: 'primaryText' }} size={'2em'} />
        </Button>
        <Menu
          id="simple-menu"
          anchorEl={anchorEl}
          keepMounted
          open={Boolean(anchorEl)}
          onClose={handleClose}
          sx={{ display: 'flex', flexDirection: 'column' }}
        >
          {links.map(link => (
            <MenuItem
              sx={{ width: '100%' }}
              key={link}
              onClick={() => changeRoute(link === 'home' ? '/' : link)}
            >
              {link.toUpperCase()}
            </MenuItem>
          ))}
        </Menu>
        <Logo logo={logo} />
        <ShoppingCartIcon />
      </div>
    </Box>
  )
}

export default Header

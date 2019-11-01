/** @jsx jsx */
import React from 'react'
import { useCart } from '../context/shopping-cart'
import { jsx } from 'theme-ui'
import { FaShoppingCart } from 'react-icons/fa'

const ShoppingCartIcon = () => {
  const { cartCount, handleCartClick, handleCartHover } = useCart()
  return (
    <button
      onMouseEnter={() => handleCartHover()}
      aria-label={'Shopping Cart'}
      onClick={handleCartClick}
      sx={{ variant: 'button.cartIcon' }}
    >
      <FaShoppingCart size={30} />
      {cartCount > 0 && (
        <span sx={{ variant: 'span.cartCount' }}>{cartCount}</span>
      )}
    </button>
  )
}

export default ShoppingCartIcon

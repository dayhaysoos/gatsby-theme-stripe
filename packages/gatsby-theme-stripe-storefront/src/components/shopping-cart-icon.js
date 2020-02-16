/** @jsx jsx */
import React from 'react'
import { useCart } from '../context/shopping-cart'
import { jsx } from 'theme-ui'
import { FaShoppingCart } from 'react-icons/fa'

const ShoppingCartIcon = () => {
  const { cartCount, handleCartClick } = useCart()
  return (
    <button
      aria-label={'Shopping Cart'}
      onClick={handleCartClick}
      sx={{
        display: 'flex',
        color: 'secondary',
        border: 'none',
        justifyContent: 'center',
        padding: 0,
        backgroundColor: 'transparent',
        width: '60px',
        cursor: 'pointer',
        transition: 'all .2s ease',
        fontWeight: '800',
        outline: 'none',
        fontSize: '1.1rem',
        position: 'relative',
        '&:hover': {
          transform: 'scale(1.1)',
        },
      }}
    >
      <FaShoppingCart size={30} />
      {cartCount > 0 && (
        <span
          sx={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            position: 'absolute',
            right: '2px',
            bottom: '15px',
            border: '1px solid',
            borderColor: 'accent',
            borderRadius: '50%',
            height: '24px',
            width: '24px',
            backgroundColor: 'accent',
            color: 'primaryText',
            fontSize: '.75rem',
          }}
        >
          {cartCount}
        </span>
      )}
    </button>
  )
}

export default ShoppingCartIcon

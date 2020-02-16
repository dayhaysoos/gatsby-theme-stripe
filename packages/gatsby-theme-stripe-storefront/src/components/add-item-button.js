/** @jsx jsx */
import React from 'react'
import { useCart } from '../context/shopping-cart'
import { jsx, Button } from 'theme-ui'

const AddItemButton = ({ sku }) => {
  const { name } = sku
  const { addItem } = useCart()

  const handleClick = e => {
    e.preventDefault()
    addItem({ ...sku, quantity: 1 })
  }

  return (
    <Button
      arial-label={`Add ${name} to cart`}
      variant={'contained'}
      sx={{
        height: 50,
        width: '50%',
        minWidth: 125,
        backgroundColor: 'primary',
        color: 'primaryText',
        '&:hover': {
          backgroundColor: 'accent',
          borderColor: 'secondary',
        },
      }}
      onClick={handleClick}
    >
      Add to Cart
    </Button>
  )
}

export default AddItemButton

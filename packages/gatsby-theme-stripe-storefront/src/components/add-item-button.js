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
      sx={{ variant: 'button.cart', height: 50, width: '50%' }}
      onClick={handleClick}
    >
      Add to Cart
    </Button>
  )
}

export default AddItemButton

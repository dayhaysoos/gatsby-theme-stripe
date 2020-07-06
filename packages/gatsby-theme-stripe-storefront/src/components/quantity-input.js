import React from 'react'
import { Box, Button } from 'theme-ui'
import { useShoppingCart } from 'use-shopping-cart'

const QuantityInput = ({ sku, action, quantity = 1 }) => {
  const { setItemQuantity, addItem, decrementItem } = useShoppingCart()
  return (
    <Button
      label={
        action === 'increase'
          ? `Increase by ${quantity}`
          : `Decrease by ${quantity}`
      }
      onClick={(event) => {
        event.preventDefault()
        action === 'increase'
          ? addItem({ sku, quantity })
          : decrementItem(sku, quantity)
      }}
    >
      {action === 'increase' ? '+' : '-'}
    </Button>
  )
}

export default QuantityInput

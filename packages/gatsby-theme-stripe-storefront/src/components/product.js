import React from 'react'
import { Box, Flex, Image, Button } from 'theme-ui'
import { useShoppingCart, formatCurrencyString } from 'use-shopping-cart'

const Product = ({ product }) => {
  const { addItem } = useShoppingCart()
  const {
    name,
    images,
    description,
    fields: { price },
  } = product

  const { unit_amount } = price
  return (
    <Flex sx={{ flexDirection: ['column', 'row', 'row'] }}>
      <Image src={images[0]} />
      <Flex
        sx={{
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <Box>
          <h1>{name}</h1>
          <h4>
            {formatCurrencyString({ value: unit_amount, currency: 'usd' })}
          </h4>
          <Button onClick={() => addItem({ sku: price.priceID })}>
            Add To Cart
          </Button>
        </Box>
      </Flex>
    </Flex>
  )
}

export default Product

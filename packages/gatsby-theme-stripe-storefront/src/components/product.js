import React from 'react'
import { Box, Flex, Image, Button } from 'theme-ui'
import { useShoppingCart, formatCurrencyString } from 'use-shopping-cart'
import Img from 'gatsby-image'

const Product = ({ product }) => {
  const { addItem } = useShoppingCart()
  const {
    name,
    images,
    description,
    fields: { price },
    childFile: { childImageSharp },
  } = product

  const { unit_amount } = price
  return (
    <Flex
      sx={{
        flexDirection: ['column', 'row', 'row'],
        justifyContent: 'center',
        alignContent: 'center',
      }}
    >
      <Box sx={{ flex: 1 }}>
        <Img fluid={childImageSharp.fluid} />
      </Box>
      <Flex
        sx={{
          flex: 1,
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <Box>
          <h1>{name}</h1>
          <h3>
            {formatCurrencyString({ value: unit_amount, currency: 'usd' })}
          </h3>
          <h3>{description}</h3>
          <Button onClick={() => addItem({ ...product, sku: price.priceID })}>
            Add To Cart
          </Button>
        </Box>
      </Flex>
    </Flex>
  )
}

export default Product

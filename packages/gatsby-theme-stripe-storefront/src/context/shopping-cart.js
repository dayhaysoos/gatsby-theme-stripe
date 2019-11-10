import React, { createContext, useReducer, useContext } from 'react'
import { useStaticQuery, graphql } from 'gatsby'

const formatPrice = num => {
  const price = (num / 100).toFixed(2)
  return `$${price}`
}

const getTotal = cartItems => {
  const total = cartItems.reduce(
    (acc, current) => acc + current.number_price * current.quantity,
    0
  )

  return total
}

const buildCart = (skus, { skuID, quantity }) => {
  if (skus.hasOwnProperty(skuID)) {
    return {
      ...skus,
      [skuID]: skus[skuID] + quantity,
    }
  } else {
    return {
      ...skus,
      [skuID]: quantity,
    }
  }
}

const formatDetailedCart = (skus, checkoutData) => {
  let arr = []

  for (let i = 0; i < checkoutData.length; i++) {
    for (let j = 0; j < skus.length; j++) {
      if (checkoutData[i].sku === skus[j].skuID) {
        arr.push({
          ...checkoutData[i],
          localImage: skus[j].localImage,
          price: skus[j].price,
          name: skus[j].name,
          number_price: skus[j].number_price,
        })
      }
    }
  }

  return arr
}

const formatCart = checkoutData => {
  return Object.keys(checkoutData).map(item => ({
    sku: item,
    quantity: checkoutData[item],
  }))
}

const updateQuantity = (quantity, skuID, skus) => {
  quantity = isNaN(quantity) ? 0 : quantity

  return {
    ...skus,
    [skuID]: quantity,
  }
}

const removeSku = (skuID, skus) => {
  delete skus[skuID]

  return skus
}

const reducer = (cart, action) => {
  const { skus } = cart

  switch (action.type) {
    case 'addItem':
      typeof localStorage !== 'undefined' &&
        localStorage.setItem(
          'skus',
          JSON.stringify(buildCart(skus, action.sku))
        )
      return {
        ...cart,
        skus: buildCart(skus, action.sku),
      }
    case 'handleQuantityChange':
      typeof localStorage !== 'undefined' &&
        localStorage.setItem(
          'skus',
          JSON.stringify(updateQuantity(action.quantity, action.skuID, skus))
        )
      return {
        ...cart,
        skus: updateQuantity(action.quantity, action.skuID, skus),
      }
    case 'delete':
      typeof localStorage !== 'undefined' &&
        localStorage.setItem(
          'skus',
          JSON.stringify(removeSku(action.skuID, skus))
        )
      return {
        ...cart,
        skus: removeSku(action.skuID, skus),
      }

    case 'storeLastClicked':
      return {
        ...cart,
        lastClicked: action.skuID,
      }

    case 'cartClick':
      return {
        ...cart,
        toggleRightMenu: !cart.toggleRightMenu,
      }

    case 'cartHover':
      return {
        ...cart,
        toggleRightMenu: true,
      }

    case 'closeCart':
      return {
        ...cart,
        toggleRightMenu: false,
      }

    default:
      console.error(`unknown action ${action.type}`)
      return cart
  }
}

export const CartContext = createContext()

export const CartProvider = ({ children, stripe }) => {
  const skuStorage =
    typeof window !== 'undefined'
      ? JSON.parse(localStorage.getItem('skus'))
      : {}
  return (
    <CartContext.Provider
      value={useReducer(reducer, {
        lastClicked: '',
        skus: skuStorage ? skuStorage : {},
        toggleRightMenu: false,
        cartDetails: [],
        stripe,
      })}
    >
      {children}
    </CartContext.Provider>
  )
}

export const useCart = () => {
  const data = useStaticQuery(graphql`
    {
      allStripeProduct {
        nodes {
          name
          id
          description
          shippable
          skus {
            image
            name
            number_price
            price
            currency
            slug
            skuID
            image
            product
          }
          attributes
          caption
        }
      }
    }
  `)

  const [cart, dispatch] = useContext(CartContext)

  const { skus, stripe, lastClicked, toggleRightMenu, cartDetails } = cart

  const itemReference = data.allStripeProduct.nodes

  let storageReference =
    typeof localStorage === 'object' && JSON.parse(localStorage.getItem('skus'))

  if (storageReference === null) {
    storageReference = {}
  }

  const checkoutData = formatCart(skus)

  typeof localStorage === 'object' &&
    localStorage.setItem('skus', JSON.stringify(storageReference))

  const detailedCart = formatDetailedCart(
    itemReference,
    checkoutData,
    cartDetails
  )

  const cartCount = checkoutData.reduce(
    (acc, current) => acc + current.quantity,
    0
  )

  const total = formatPrice(getTotal(detailedCart))

  const addItem = sku => dispatch({ type: 'addItem', sku })

  const handleQuantityChange = (quantity, skuID) => {
    dispatch({ type: 'handleQuantityChange', quantity, skuID })
  }

  const deleteItem = skuID => dispatch({ type: 'delete', skuID })

  const storeLastClicked = skuID =>
    dispatch({ type: 'storeLastClicked', skuID })

  const handleCartClick = () => dispatch({ type: 'cartClick' })

  const handleCartHover = () => dispatch({ type: 'cartHover' })

  const handleCloseCart = () => dispatch({ type: 'closeCart' })

  const redirectToCheckout = async (submitType = 'auto') => {
    const { error } = await stripe.redirectToCheckout({
      items: checkoutData,
      successUrl: `http://localhost:8000/`,
      cancelUrl: `http://localhost:8000/`,
      submitType,
    })
    if (error) {
      console.warn('Error:', error)
    }
  }

  return {
    skus,
    addItem,
    deleteItem,
    cartCount,
    checkoutData,
    redirectToCheckout,
    handleQuantityChange,
    lastClicked,
    storeLastClicked,
    toggleRightMenu,
    handleCartClick,
    cartDetails,
    detailedCart,
    total,
    handleCartHover,
    handleCloseCart,
  }
}

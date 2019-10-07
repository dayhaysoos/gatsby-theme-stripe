/** @jsx jsx */
import React from 'react'
import { jsx } from 'theme-ui'
import { FaImage } from 'react-icons/fa'
import Img from 'gatsby-image'

const CheckoutImage = ({ image, name, size }) => {
  return (
    <>
      {image === null ? (
        <FaImage sx={{ variant: 'img.checkout' }} size={size} />
      ) : (
        <Img
          alt={name}
          sx={{ variant: 'img.checkout' }}
          fixed={image.childImageSharp.fixed}
        />
      )}
    </>
  )
}

export default CheckoutImage

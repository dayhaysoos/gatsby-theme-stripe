// @jsx jsx
import React from 'react'
import { jsx } from 'theme-ui'
import Container from '@material-ui/core/Container'
import heroImage from '../images/hero-image.jpg'

const HeroImage = () => {
  return (
    <Container>
      <h1>Hero!</h1>
      <img sx={{ variant: 'hero.img' }} src={heroImage}></img>
    </Container>
  )
}

export default HeroImage

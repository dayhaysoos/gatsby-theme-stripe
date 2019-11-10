/** @jsx jsx */
import { jsx } from 'theme-ui'
import Container from './container'
import heroImage from '../images/hero-image.jpg'

const Image = ({ maxWidth = '' }) => {
  return (
    <Container maxWidth={maxWidth}>
      <img sx={{ variant: 'hero.img' }} src={heroImage}></img>
    </Container>
  )
}

export default Image

/** @jsx jsx */
import { jsx } from 'theme-ui'
// import Container from '@material-ui/core/Container'
import Container from './container'

const SideBySide = ({ children, type }) => {
  return <Container type={type}>{children}</Container>
}

export default SideBySide

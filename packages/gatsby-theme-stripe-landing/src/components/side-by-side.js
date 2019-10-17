// @jsx jsx
import React from 'react'
import { jsx } from 'theme-ui'
// import Container from '@material-ui/core/Container'
import Container from '../components/container'

const SideBySide = ({ children, type }) => {
  return <Container type={type}>{children}</Container>
}

export default SideBySide

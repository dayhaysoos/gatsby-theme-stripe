// @jsx jsx
import React from 'react'
import { jsx } from 'theme-ui'
import Container from '../components/container'
import Paper from '@material-ui/core/Paper'
import Typography from '@material-ui/core/Typography'
import DescriptionHeader from '../components/description-header'

const FeatureDescription = ({
  fontSize = '16px',
  description,
  header,
  type = 'main',
  maxWidth = 'md',
}) => {
  return (
    <Container maxWidth={maxWidth}>
      <Paper sx={{ variant: `paper.${type}` }}>
        {header && <DescriptionHeader header={header} />}
        <Typography component={'p'} css={{ fontSize: fontSize, margin: 0 }}>
          {description}
        </Typography>
      </Paper>
    </Container>
  )
}

export default FeatureDescription

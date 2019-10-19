import React from 'react'
import Typography from '@material-ui/core/Typography'

const DescriptionHeader = ({ header }) => {
  return (
    <Typography
      variant={'h5'}
      style={{ textAlign: 'center', marginBottom: '15px' }}
      component={'h5'}
    >
      {header}
    </Typography>
  )
}

export default DescriptionHeader

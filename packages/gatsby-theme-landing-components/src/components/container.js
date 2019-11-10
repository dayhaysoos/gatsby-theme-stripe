/** @jsx jsx */
import { jsx } from 'theme-ui'
import Container from '@material-ui/core/Container'

const LandingContainer = ({ children, type = 'main', maxWidth = '' }) => {
  return (
    <Container
      maxWidth={maxWidth}
      sx={{ variant: `container.${type}` }}
      css={{
        display: 'flex',
        '@media (max-width: 680px)': {
          flexDirection: 'column',
        },
      }}
    >
      {children}
    </Container>
  )
}

export default LandingContainer

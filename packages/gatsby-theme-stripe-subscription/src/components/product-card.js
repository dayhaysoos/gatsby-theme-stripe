/** @jsx jsx */
import { jsx } from 'theme-ui'
import { Card, CardContent, Typography } from '@material-ui/core'
import SubscribeButton from './subscribe-button'

const ProductCard = ({ plan }) => {
  return (
    <Card
      key={plan.planID}
      sx={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        flexBasis: '30%',
        margin: '20px 10px',
        alignItems: 'center',
        '@media (max-width: 900px)': {
          flexBasis: '45%',
        },
        '@media (max-width: 600px)': {
          flexBasis: '100%',
          maxWidth: '300px',
        },
      }}
    >
      <CardContent sx={{ margin: '0 auto' }}>
        <section
          sx={{
            display: 'flex',
            justifyContent: 'center',
          }}
        >
          <Typography sx={{ color: 'primary', fontSize: 6 }}>
            {plan.amount.slice(0, -3)}
          </Typography>
          <Typography
            sx={{
              color: 'primary',
              fontSize: 2,
              display: 'flex',
              alignItems: 'flex-end',
              position: 'relative',
              bottom: '14px',
            }}
            component={'span'}
          >
            {plan.interval === 'month' ? '/mo' : plan.interval}
          </Typography>
        </section>
        <Typography align={'center'} sx={{ color: 'primary', fontSize: 4 }}>
          {plan.name}
        </Typography>
      </CardContent>
      <SubscribeButton planID={plan.planID} />
    </Card>
  )
}

export default ProductCard

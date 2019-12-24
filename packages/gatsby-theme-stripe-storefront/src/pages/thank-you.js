/** @jsx jsx */
import { jsx } from 'theme-ui'
import Layout from '../components/layout'

const ThankYou = () => {
  window.localStorage.removeItem('skus')
  return (
    <Layout>
      <h1
        sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}
      >
        Thank you for your purchase!
      </h1>
    </Layout>
  )
}

export default ThankYou

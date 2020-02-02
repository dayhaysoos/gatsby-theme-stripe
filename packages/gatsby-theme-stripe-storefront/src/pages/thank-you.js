/** @jsx jsx */
import { jsx } from 'theme-ui'
import Layout from '../components/layout'

const ThankYou = () => {
  const isBrowser = typeof window !== 'undefined'

  if (isBrowser) {
    window.localStorage.removeItem('skus')
  }

  setTimeout(() => {
    if (isBrowser) {
      window.location.href = '/'
    }
  }, 2000)
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

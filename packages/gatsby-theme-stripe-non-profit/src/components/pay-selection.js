/** @jsx jsx */
import { useState } from 'react'
import { jsx, Button } from 'theme-ui'
import { graphql, useStaticQuery } from 'gatsby'
import PlanList from '../components/plan-list'
import DonateList from '../components/donate-list'

const PaySelection = () => {
  const [donateState, setState] = useState({
    isSubscribing: false,
  })

  const { isSubscribing } = donateState

  const data = useStaticQuery(graphql`
    query {
      allStripePlan {
        nodes {
          id
          amount
          amount_decimal
          billing_scheme
          currency
          interval
          interval_count
          nickname
          product
          usage_type
          planID
          currency
        }
      }
      allStripeSku {
        nodes {
          id
          name
          price
          currency
          skuID
        }
      }
    }
  `)

  const plans = data.allStripePlan.nodes

  const skus = data.allStripeSku.nodes

  return (
    <section
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        width: '400px',
        paddingBottom: '20px',
        backgroundColor: 'lightgray',
        pt: 20,
      }}
    >
      <section
        sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          marginBottom: '20px',
        }}
      >
        <div
          sx={{
            display: 'flex',
            justifyContent: 'space-between',
            width: '90%',
          }}
        >
          <Button
            color={isSubscribing ? 'gray' : 'white'}
            sx={{
              width: '50%',
              textAlign: 'center',
              variant: isSubscribing
                ? 'planList.button.notClicked'
                : 'planList.button.lastClicked',
            }}
            onClick={() => setState({ isSubscribing: false })}
          >
            Give Once
          </Button>
          <Button
            color={isSubscribing ? 'white' : 'gray'}
            sx={{
              width: '50%',
              textAlign: 'center',
              variant: isSubscribing
                ? 'planList.button.lastClicked'
                : 'planList.button.notClicked',
            }}
            onClick={() => setState({ isSubscribing: true })}
          >
            Monthly
          </Button>
        </div>
        <h2>Choose amount to give</h2>
      </section>
      {isSubscribing ? <PlanList plans={plans} /> : <DonateList skus={skus} />}
    </section>
  )
}

export default PaySelection

/** @jsx jsx */
import React, { useState } from 'react'
import { Styled, jsx } from 'theme-ui'
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
          name
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
    <section sx={{ variant: 'section.donateForm' }}>
      <section sx={{ variant: 'section.buttonWrapper' }}>
        <Styled.h2>Choose amount to give</Styled.h2>
        <button
          css={{ width: 'initial' }}
          sx={{
            variant: isSubscribing
              ? 'planList.button'
              : 'planList.button.lastClicked',
          }}
          onClick={() => setState({ isSubscribing: false })}
        >
          Give Once
        </button>
        <button
          css={{ width: 'initial' }}
          sx={{
            variant: isSubscribing
              ? 'planList.button.lastClicked'
              : 'planList.button',
          }}
          onClick={() => setState({ isSubscribing: true })}
        >
          Monthly
        </button>
      </section>
      {isSubscribing ? <PlanList plans={plans} /> : <DonateList skus={skus} />}
    </section>
  )
}

export default PaySelection

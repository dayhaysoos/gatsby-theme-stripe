const { createRemoteFileNode } = require('gatsby-source-filesystem')

require('dotenv').config({
  path: `.env.${process.env.NODE_ENV}`,
})

const axios = require('axios')

const formatPrice = num => {
  const price = (num / 100).toFixed(2)
  return `$${price}`
}

exports.createSchemaCustomization = ({ actions }) => {
  const { createTypes } = actions

  createTypes(`

  type Attribute implements Node {
    id: ID!
    name: String!
  }

  type MetaData implements Node {
    id: ID!
  }

  type Tier implements Node {
    flat_amount: Int
    flat_amount_decimal: String
    unit_amount: Int
    unit_amount_decimal: String
    up_to: String
  }

  type TransformUsage implements Node {
    divide_by: Int
    round: String
  }

  type StripePlan implements Node {
    object: String!
    id: String!
    active: String!
    aggregate_usage: String
    amount: String!
    amount_decimal: String!
    billing_scheme: String!
    currency: String!
    interval: String!
    interval_count: Int!
    livemode: Boolean!
    nickname: String
    product: String!
    tier: Tier
    tiers_mode: String
    transform_usage: TransformUsage
    trial_period_days: Int
    usage_type: String
  }
  `)
}

exports.sourceNodes = async ({
  actions,
  createNodeId,
  createContentDigest,
  reporter,
}) => {
  const plans = await axios({
    method: 'GET',
    url: 'https://api.stripe.com/v1/plans',
    headers: {
      Authorization: `Bearer ${process.env.STRIPE_API_SECRET}`,
    },
  })

  if (plans.errors) {
    reporter.panic('Error loading skus', JSON.stringify(result.errors))
  }

  const planList = plans.data

  planList.data.forEach(plan => {
    const node = {
      ...plan,
      number_amount: plan.amount,
      planID: plan.id,
      id: createNodeId(`Stripe-${plan.id}`),
      name: plan.nickname,
      slug: plan.nickname,
      internal: {
        type: 'StripePlan',
        contentDigest: createContentDigest(plan),
      },
    }

    // create node with processed data

    actions.createNode(node)
  })

  exports.sourceNodes = async ({
    actions,
    createNodeId,
    createContentDigest,
    reporter,
  }) => {
    planList.data.forEach(plan => {
      const node = {
        ...plan,
        number_amount: plan.amount,
        amount: formatPrice(plan.amount),
        planID: plan.id,
        id: createNodeId(`Stripe-${plan.id}`),
        name: plan.nickname,
        slug: plan.nickname,
        // image: plan.image ? plan.image : 'no-image',
        internal: {
          type: 'StripePlan',
          contentDigest: createContentDigest(plan),
        },
      }

      // create node with processed data

      actions.createNode(node)
    })
  }
}

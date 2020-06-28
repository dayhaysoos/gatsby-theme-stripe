const path = require(`path`)
require('dotenv').config({
  path: `.env.${process.env.NODE_ENV}`,
})

const { createFilePath } = require(`gatsby-source-filesystem`)

const stripe = require('stripe')(process.env.STRIPE_API_SECRET)

const axios = require('axios')

const slugify = (str) => {
  const slug = str
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/(^-|-$)+/g, '')

  return `${slug}`.replace(/\/\/+/g, '/')
}

exports.createSchemaCustomization = ({ actions }) => {
  const { createTypes } = actions

  createTypes(`

  type Price implements Node {
    billing_scheme: String!
    currency: String!
    product: Product
    priceID: String
  }

  type Product implements Node {
    id: String!
    object: String
    active: Boolean,
    attributes: [String],
    created: Int,
    description: String
    images: [String],
    livemode: Boolean,
    name: String!
    statement_descriptor: String
    type: String!
    unit_label: String
    updated: Int
    productID: String!
    slug: String
  }

  type Image {
    image: String
  }
  `)
}

exports.sourceNodes = async ({
  actions,
  createNodeId,
  createContentDigest,
  reporter,
}) => {
  const pricesList = await stripe.prices.list({
    expand: ['data.product'],
  })

  pricesList.data.forEach((price) => {
    const node = {
      ...price,
      id: createNodeId(`Price-${price.id}`),
      priceID: price.id,
      internal: {
        type: 'Price',
        contentDigest: createContentDigest(price),
      },
    }
    actions.createNode(node)
  })
}

// placeholder for products that have been turned into GQL Nodes
let products = []

exports.onCreateNode = async ({
  node,
  actions: { createNode, createNodeField },
  createNodeId,
  createContentDigest,
  getNode,
}) => {
  // only apply logic to Price nodes
  if (node.internal.type === 'Price' && !products.includes(node.product.id)) {
    const productNodeId = createNodeId(`Product-${node.product.id}`)

    //if product isn't in the array, push the id into the array to keep track
    products.push(node.product.id)
    createNode({
      ...node.product,
      id: productNodeId,
      productID: node.product.id,
      slug: slugify(node.product.name),
      internal: {
        type: 'Product',
        contentDigest: createContentDigest(node.product),
      },
    })

    createNodeField({
      node: getNode(productNodeId),
      name: 'price',
      value: node,
    })
  }
}

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions
  const result = await graphql(`
    query {
      allProduct {
        edges {
          node {
            slug
          }
        }
      }
    }
  `)
  result.data.allProduct.edges.forEach(({ node }) => {
    createPage({
      path: `/products/${node.slug}`,
      component: path.resolve(`./src/templates/product.js`),
      context: {
        // Data passed to context is available
        // in page queries as GraphQL variables.
        slug: node.slug,
      },
    })
  })
}

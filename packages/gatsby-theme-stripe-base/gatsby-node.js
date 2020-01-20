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

  type StripeSku implements Node {
    id: ID!
    object: String
    attributes: Attribute
    currency: String!
    image: String
    metadata: MetaData!
    price: String!
    product: String!
    skuID: String!
    name: String!
    slug: String!
  }
  


  type StripeImage implements Node {
    image: Image
  }

  type Image {
    image: String
  }
  `)
}

exports.onCreateNode = async ({
  node,
  actions: { createNode },
  store,
  cache,
  createNodeId,
}) => {
  // For all StripeImage nodes that have a featured image url, call createRemoteFileNode

  if (node.internal.type === 'StripeSku' && node.image !== null) {
    let fileNode = await createRemoteFileNode({
      url: node.image, // string that points to the URL of the image
      parentNodeId: node.id, // id of the parent node of the fileNode we are going to create
      createNode, // helper function in gatsby-node to generate the node
      createNodeId, // helper function in gatsby-node to generate the node id
      cache, // Gatsby's cache
      store, // Gatsby's redux store
    })

    // if the file was created, attach the new node to the parent node
    if (fileNode) {
      node.localImage___NODE = fileNode.id
    }
  }
}

// grab sku data from stripe api
exports.sourceNodes = async ({
  actions,
  createNodeId,
  createContentDigest,
  reporter,
}) => {
  const result = await axios({
    method: 'GET',
    url: 'https://api.stripe.com/v1/skus',
    headers: {
      Authorization: `Bearer ${process.env.STRIPE_API_SECRET}`,
    },
  })

  const skuList = result.data

  // format sku data to something more desirable
  // create nodeId in the process
  // create type in internal Object

  skuList.data.forEach(sku => {
    const node = {
      ...sku,
      number_price: sku.price,
      skuID: sku.id,
      id: createNodeId(`Stripe-${sku.id}`),
      name: sku.attributes.name,
      slug: sku.attributes.name,
      internal: {
        type: 'StripeSku',
        contentDigest: createContentDigest(sku),
      },
    }
    // create node with processed data
    actions.createNode(node)
  })
}

// create url slug for each product
exports.createResolvers = ({ createResolvers }, options) => {
  const basePath = options.basePath || '/'

  // Quick-and-dirty helper to convert strings into URL-friendly slugs.
  const slugify = str => {
    const slug = str
      .toLowerCase()
      .replace(/[^a-z0-9]+/g, '-')
      .replace(/(^-|-$)+/g, '')

    return `/${basePath}/${slug}`.replace(/\/\/+/g, '/')
  }

  // reformat "slug" value in this resolver
  createResolvers({
    StripeSku: {
      slug: {
        resolve: source => slugify(source.name),
      },
    },
  })
}

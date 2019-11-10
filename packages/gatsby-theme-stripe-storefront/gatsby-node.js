exports.createPages = async ({ actions, graphql }) => {
  const { createPage } = actions

  const productQuery = await graphql(`
    {
      allStripeProduct {
        nodes {
          slug
        }
      }
    }
  `)

  const products = productQuery.data.allStripeProduct.nodes

  products.forEach(product => {
    const slug = product.slug

    createPage({
      path: slug,
      component: require.resolve('./src/templates/product-page.js'),
      context: {
        slug,
      },
    })
  })
}

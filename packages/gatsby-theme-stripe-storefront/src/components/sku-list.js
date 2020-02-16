/** @jsx jsx */
import { graphql, useStaticQuery } from 'gatsby'
import { jsx, Card, Box, Grid, Flex } from 'theme-ui'
import AddItemButton from './add-item-button'
import SkuImage from './sku-list/sku-image'
import CardContent from '@material-ui/core/CardContent'

const SkuList = () => {
  const data = useStaticQuery(graphql`
    query {
      allStripeSku {
        nodes {
          name
          price
          currency
          slug
          skuID
          localImage {
            childImageSharp {
              fluid {
                base64
                tracedSVG
                aspectRatio
                src
                srcSet
                srcWebp
                srcSetWebp
                sizes
                originalImg
                originalName
                presentationWidth
                presentationHeight
              }
            }
          }
        }
      }
    }
  `)

  const skus = data.allStripeSku.nodes

  const toCurrency = ({ price, currency }) => {
    const formatted = new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency,
    }).format(price / 100)

    return formatted
  }

  return (
    <Grid mt={40} mb={40} gap={2} columns={[1, 2, 4]}>
      {skus.map(sku => {
        const { localImage, name, skuID, price, currency } = sku

        return (
          <Flex
            sx={{
              flexDirection: 'column',
              justifyContent: 'center',
              alignItems: 'center',
            }}
          >
            <Card sx={{ width: '100%', maxWidth: 300 }} key={skuID}>
              <div>
                <SkuImage image={localImage} name={name} />
              </div>
              <Flex
                sx={{
                  flexDirection: 'column',
                  justifyContent: 'center',
                  alignItems: 'center',
                  bg: 'secondary',
                  paddingBottom: 20,
                  flexWrap: 'wrap',
                }}
              >
                <p
                  sx={{
                    fontFamily: 'body',
                    color: 'accent',
                    fontWeight: 600,
                    letterSpacing: '2px',
                    display: 'block',
                    fontSize: [null, '14px', '18px'],
                  }}
                >
                  {name}
                </p>
                <p
                  sx={{
                    color: 'accent',
                    fontWeight: 600,
                    letterSpacing: '2px',
                    display: 'block',
                    marginTop: 0,
                    fontSize: [null, '14px', '18px'],
                  }}
                >
                  {toCurrency({ price, currency })}
                </p>
                <AddItemButton sku={sku} />
              </Flex>
            </Card>
          </Flex>
        )
      })}
    </Grid>
  )
}

export default SkuList

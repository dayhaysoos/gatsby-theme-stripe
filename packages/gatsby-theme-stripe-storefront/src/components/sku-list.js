/** @jsx jsx */
import React from 'react'
import { graphql, useStaticQuery } from 'gatsby'
import { jsx } from 'theme-ui'
import AddItemButton from './add-item-button'
import SkuImage from './sku-list/sku-image'
import Card from '@material-ui/core/Card'
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
              fixed(height: 200, width: 200) {
                base64
                tracedSVG
                aspectRatio
                width
                height
                src
                srcSet
                srcWebp
                srcSetWebp
                originalName
              }
            }
          }
        }
      }
    }
  `)

  const skus = data.allStripeSku.nodes

  return (
    <section sx={{ variant: 'ul.skuList' }}>
      {skus.map(sku => {
        const { localImage, name, skuID, price } = sku

        return (
          <Card key={skuID} sx={{ variant: 'li.purchaseItem', border: 'none' }}>
            <CardContent>
              <section sx={{ variant: 'section.itemDetails' }}>
                <div
                  sx={{
                    maxHeight: '200px',
                    height: '200px',
                    marginBottom: '20px',
                  }}
                >
                  <SkuImage size={200} image={localImage} name={name} />
                </div>
                <span
                  sx={{
                    color: 'secondaryText',
                    fontWeight: 600,
                    letterSpacing: '2px',
                    height: '54px',
                    display: 'block',
                    marginBottom: '20px',
                  }}
                >
                  {name}
                </span>
                <span
                  sx={{
                    color: 'secondaryText',
                    fontWeight: 600,
                    letterSpacing: '2px',
                    display: 'block',
                  }}
                >
                  {price}
                </span>
              </section>
              <section
                sx={{ variant: 'section.buttonWrapper', marginTop: '20px' }}
              >
                <AddItemButton sku={sku} />
              </section>
            </CardContent>
          </Card>
        )
      })}
    </section>
  )
}

export default SkuList

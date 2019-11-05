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
                <div css={{ maxHeight: '200px', height: '200px' }}>
                  <SkuImage size={200} image={localImage} name={name} />
                </div>
                <p sx={{ color: 'text' }}>{name}</p>
                <p sx={{ color: 'text' }}>{price}</p>
              </section>
              <section sx={{ variant: 'section.buttonWrapper' }}>
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

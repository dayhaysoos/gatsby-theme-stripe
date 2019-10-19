import React from 'react'
import { jsx, Main } from 'theme-ui'
import SideBySide from '../components/side-by-side'
import FeatureDescription from '../components/feature-description'
import Image from '../components/image'
import copy from '../copy.json'

const Landing = () => {
  return (
    <Main>
      <SideBySide type={'alt'}>
        <FeatureDescription
          header={'some header'}
          description={copy.featureDescription1}
        />
        <FeatureDescription
          header={'Another Header'}
          description={copy.featureDescription1}
          type={'alt'}
        />
        <FeatureDescription
          header={'A third header'}
          description={copy.featureDescription1}
        />
      </SideBySide>
      <SideBySide>
        <FeatureDescription
          header={
            'A header with a lot of text so we can see what it looks like'
          }
          type={'alt'}
          description={copy.featureDescription1}
        />
        <Image />
      </SideBySide>
      <SideBySide type={'alt'}>
        <FeatureDescription description={copy.featureDescription1} />
      </SideBySide>
      <Image />
      <FeatureDescription description={copy.featureDescription1} />
    </Main>
  )
}

export default Landing

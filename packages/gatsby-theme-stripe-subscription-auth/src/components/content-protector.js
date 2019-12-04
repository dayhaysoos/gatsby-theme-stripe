import React, { Fragment } from 'react'
import {
  auth,
  useAuth,
  firestore,
  useFirestoreQuery,
} from 'gatsby-theme-firebase'

const ContentBlocked = () => <h3>Content Blocked</h3>

const ContentProtector = ({
  shouldShow,
  guardComponent = <ContentBlocked />,
  children,
}) => {
  if (shouldShow) {
    return children
  } else {
    return <Fragment>{guardComponent}</Fragment>
  }
}

export default ContentProtector

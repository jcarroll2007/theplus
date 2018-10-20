import React, { Fragment } from 'react'
import init from './index'

export default function Provider({ children }) {
  init()

  return (
    <Fragment>
      {children}
    </Fragment>
  )
}
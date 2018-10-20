import React from 'react'
import FirebaseProvider from './src/services/firebase/Provider'

export function wrapRootElement({ element }) {
  return (
    <FirebaseProvider>
      {element}
    </FirebaseProvider>
  )
}
import firebase from 'firebase/app'
import config from './config.js'

let initialized = false
export default function init() {
  if (initialized) return
  initialized = true
  firebase.initializeApp(config)
}
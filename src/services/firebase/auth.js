import firebase from 'firebase/app'
import 'firebase/auth'


const googleProvider = new firebase.auth.GoogleAuthProvider()
export function login() {
  firebase.auth().signInWithRedirect(googleProvider)
}
import firebase from 'firebase/compat/app'
import 'firebase/compat/auth' //v9

const app = firebase.initializeApp({
  apiKey: 'AIzaSyBndE7fWd35rkTvX5GKAdSM6_Ahnw4f-kA',
  authDomain: 'capstone1-7c1eb.firebaseapp.com',
  projectId: 'capstone1-7c1eb',
  storageBucket: 'capstone1-7c1eb.appspot.com',
  messagingSenderId: '532703350134',
  appId: '1:532703350134:web:90a5c21635204ffa5cbe57',
})

export const auth = app.auth
export default app

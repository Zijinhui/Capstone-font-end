import firebase from "firebase/app"
import "firebase/auth"

const app = firebase.initializeApp({
  apiKey: "AIzaSyAvZW-7LPoIQpXj9OrxJvjGHUL9PzKdfD8",
  authDomain: "auth-development-4d103.firebaseapp.com",
  projectId: "auth-development-4d103",
  storageBucket: "auth-development-4d103.appspot.com",
  messagingSenderId: "719552945484",
  appId: "1:719552945484:web:00ccff5aca77f896e683e9"
})

export const auth = app.auth()
export default app

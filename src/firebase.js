import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyB46XSFX3EYQYrErLxiCRVY67Kc8oUB9Oo",
  authDomain: "clone-a18f1.firebaseapp.com",
  projectId: "clone-a18f1",
  storageBucket: "clone-a18f1.appspot.com",
  messagingSenderId: "1017872718667",
  appId: "1:1017872718667:web:a01eef0ba52e02685326ce",
  measurementId: "G-B6KMJFD3TP"
};

  const firebaseApp = firebase.initializeApp(firebaseConfig)


  const db = firebaseApp.firestore()
  const auth = firebase.auth()

  export { db,auth};
  
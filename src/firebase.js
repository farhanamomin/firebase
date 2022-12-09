
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
  
const firebaseConfig = {
    apiKey: "AIzaSyCUMREfveT23RMu2TxgVtkfCMc8qfikRrA",
  authDomain: "login-with-mobile-b0c8e.firebaseapp.com",
  projectId: "login-with-mobile-b0c8e",
  storageBucket: "login-with-mobile-b0c8e.appspot.com",
  messagingSenderId: "835446610210",
  appId: "1:835446610210:web:ee3228c283641e7035ad7b",
  measurementId: "G-9CFYL1Q3JW"
  };
  
firebase.initializeApp(firebaseConfig);
var auth = firebase.auth();
export {firebase , auth};
import firebase from "firebase/compat/app";
import "firebase/compat/auth"
import "firebase/compat/firestore"
const firebaseConfig = {
    apiKey: "AIzaSyD2rb7Hd62SV-jAZcDSYRQrN4EnsWPhxW4",
    authDomain: "clone-f68f4.firebaseapp.com",
    projectId: "clone-f68f4",
    storageBucket: "clone-f68f4.appspot.com",
    messagingSenderId: "563240564422",
    appId: "1:563240564422:web:7634d639c6d7c960a089c7",
    measurementId: "G-R860YBPCHH"
  };


 
  
  const firebaseApp = firebase.initializeApp(firebaseConfig);
  
  const db = firebaseApp.firestore();
  const auth = firebase.auth();
  
  export { db, auth };
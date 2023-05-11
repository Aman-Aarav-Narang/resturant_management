// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore';
import { getAuth, signInWithPopup, GoogleAuthProvider } from 'firebase/auth';

import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
import 'firebase/compat/database';


const firebaseConfig = {
    apiKey: "AIzaSyAwcx16poBw74eNEWFGUXomLIyPZkkRfMw",
    authDomain: "uploadreact-d0b7b.firebaseapp.com",
    databaseURL: "https://uploadreact-d0b7b-default-rtdb.firebaseio.com",
    projectId: "uploadreact-d0b7b",
    storageBucket: "uploadreact-d0b7b.appspot.com",
    messagingSenderId: "1020677317331",
    appId: "1:1020677317331:web:faba15c9a5507fd75fea26"
};

// Initialize Firebase
// const app = initializeApp(firebaseConfig);
// export const db = getFirestore(app);
// export const auth = getAuth();

const fireDb = firebase.initializeApp(firebaseConfig)
export default fireDb.database().ref();
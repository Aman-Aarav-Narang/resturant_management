import { initializeApp } from "firebase/app";
import 'firebase/auth'
import 'firebase/firestore'
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
import "firebase/compat/database";

import { getStorage } from "firebase/storage";


const firebaseConfig = {
    apiKey: "AIzaSyAwcx16poBw74eNEWFGUXomLIyPZkkRfMw",
    authDomain: "uploadreact-d0b7b.firebaseapp.com",
    databaseURL: "https://uploadreact-d0b7b-default-rtdb.firebaseio.com",
    projectId: "uploadreact-d0b7b",
    storageBucket: "uploadreact-d0b7b.appspot.com",
    messagingSenderId: "1020677317331",
    appId: "1:1020677317331:web:faba15c9a5507fd75fea26"
};
// const app = initializeApp(firebaseConfig);
// const auth = fire.auth()
// const db = firebase.firestore()
// export {  auth, db }
// export default fireDb.database().ref();
// const fireDb = firebase.initializeApp(firebaseConfig)
// const auth = firebase.auth()
// const db = firebase.firestore()
// firebase.initializeApp(firebaseConfig);
// export {fireDb,auth,db} 





const app = initializeApp(firebaseConfig);
let fireDb = firebase.initializeApp(firebaseConfig);
export const fireData = fireDb.database().ref();
export const storage = getStorage(app)
export const auth = firebase.auth();

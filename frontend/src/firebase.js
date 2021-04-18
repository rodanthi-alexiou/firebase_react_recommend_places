import firebase from "firebase";

const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyAFg30VuzF36EOPJ0s4ksCOP-WI8j973sk",
    authDomain: "date-ideas-309121.firebaseapp.com",
    projectId: "date-ideas-309121",
    storageBucket: "date-ideas-309121.appspot.com",
    messagingSenderId: "475689748578",
    appId: "1:475689748578:web:7d04865251cc0b876ca93b",
    measurementId: "G-91DDWCHDTR"
});


const db = firebaseApp.firestore();
const auth = firebase.auth();
const storage = firebase.storage();

export { db, auth, storage};
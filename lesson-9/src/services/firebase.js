import firebase from "firebase/compat/app";
import 'firebase/compat/database'
import 'firebase/compat/auth'

const firebaseConfig = {
    apiKey: "AIzaSyDa_EMac8vyhSJRR4tNd6s3srtbmX3trNI",
    authDomain: "react-chats-lesson9.firebaseapp.com",
    projectId: "react-chats-lesson9",
    storageBucket: "react-chats-lesson9.appspot.com",
    messagingSenderId: "455674047647",
    appId: "1:455674047647:web:ec5f597e5297afa8b5c6aa"
};

const firebasedb = firebase.initializeApp(firebaseConfig);
export const db = firebasedb.database().ref();
export const auth = firebase.auth();
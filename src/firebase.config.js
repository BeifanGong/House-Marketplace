// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from 'firebase/firestore'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCUisyLhtBWwsf2gLJzHvguxXahCHTZKM0",
  authDomain: "house-marketplace-app-69903.firebaseapp.com",
  projectId: "house-marketplace-app-69903",
  storageBucket: "house-marketplace-app-69903.appspot.com",
  messagingSenderId: "756654181461",
  appId: "1:756654181461:web:f0b6829da1ed0a308798dc"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore()
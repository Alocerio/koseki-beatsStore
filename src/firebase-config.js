// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCgh-vE8MNIVALGFy7T5EJcl73Ch_0vwJk",
  authDomain: "koseki-store.firebaseapp.com",
  projectId: "koseki-store",
  storageBucket: "koseki-store.appspot.com",
  messagingSenderId: "974301666844",
  appId: "1:974301666844:web:48536a2d1b611893c549d9",
  measurementId: "G-P8D68KME8V",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const db = getFirestore();
export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();

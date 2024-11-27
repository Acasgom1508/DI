import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCX9Hrjy3-uuK42Wz83wf04pGnh9kCj6oE",
  authDomain: "diarioactividades-1189d.firebaseapp.com",
  projectId: "diarioactividades-1189d",
  storageBucket: "diarioactividades-1189d.firebasestorage.app",
  messagingSenderId: "114906244830",
  appId: "1:114906244830:web:b4821d9e8e4f2e71d0444f",
};

// Initialize Firebase
export const FIREBASE_APP = initializeApp(firebaseConfig);
export const FIREBASE_AUTH = getAuth(FIREBASE_APP);
export const FIRESTORE_DB = getFirestore(FIREBASE_APP);

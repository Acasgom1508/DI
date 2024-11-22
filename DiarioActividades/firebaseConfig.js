import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDJA__-jLG6nTo5Zaph748WdrL6OYHLVpU",
  authDomain: "diarioactividades1.firebaseapp.com",
  projectId: "diarioactividades1",
  storageBucket: "diarioactividades1.firebasestorage.app",
  messagingSenderId: "616896650813",
  appId: "1:616896650813:web:7e0546ee3dc4a63d7d9454",
};

// Initialize Firebase
export const FIREBASE_APP = initializeApp(firebaseConfig);
export const FIREBASE_AUTH = getAuth(FIREBASE_APP);
export const FIRESTORE_DB = getFirestore(FIREBASE_APP);

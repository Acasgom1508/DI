import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text>Open up App.js to start working on your app!</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAIl6MCcoQGtX9DfTaYXCeUEbEmQ-ITdt8",
  authDomain: "diarioactividades-d9767.firebaseapp.com",
  projectId: "diarioactividades-d9767",
  storageBucket: "diarioactividades-d9767.firebasestorage.app",
  messagingSenderId: "457016799490",
  appId: "1:457016799490:web:ae55c40bdd17fdda53121b",
  measurementId: "G-T40DYKHE8H"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native';
import {FIREBASE_APP, FIREBASE_AUTH, FIRESTORE_DB} from './firebaseConfig'

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.texto}>Inicio de sesión</Text>
      <TextInput placeholder="Usuario" style={styles.placeholder}/>
      <TextInput placeholder="Contraseña" style={styles.placeholder} secureTextEntry/>
      <TouchableOpacity style={styles.boton}>
        <Text style={styles.botonText}>Ingresar</Text>
      </TouchableOpacity>
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

  texto: {
    fontSize: 28,
    fontWeight: 'bold',
    textTransform: 'uppercase',
    fontFamily: 'Arial',
    lineHeight: 32,
    letterSpacing: 0.5,
    marginBottom: 30,
  },


  placeholder: {
    width: 300,
    height: 50,
    borderWidth: 1,
    borderColor: '#000',
    padding: 10,
    marginBottom: 20,
    borderRadius: 5,
    backgroundColor: '#f2f2f2',
    fontSize: 18,
    color: '#000',
    fontWeight: 'bold',
    textAlign: 'center',
    elevation: 5,
    fontFamily: 'Arial',
    lineHeight: 24,
    letterSpacing: 0.5,
    textTransform: 'uppercase',
  },

  boton: {
    backgroundColor: '#2196F3',
    width: 150,
    height: 50,
    borderRadius: 5,
    justifyContent: 'center',
    alignItems: 'center',
  },

  botonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
    textTransform: 'uppercase',
    fontFamily: 'Arial',
    lineHeight: 24,
    letterSpacing: 0.5,
    textTransform: 'uppercase',
  }
});


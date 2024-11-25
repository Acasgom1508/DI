import AsyncStorage from "@react-native-async-storage/async-storage";
import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { useState, useEffect } from "react";

export default function PrimeraPantalla({ navigation }) {
  const [nombre, setNombre] = useState("");
  const [contra, setContra] = useState("");

  const obtenerDatos = async () => {
    try {
      const nombreGuardado = await AsyncStorage.getItem("@nombre_usuario");
      const contraGuardada = await AsyncStorage.getItem("@contra_usuario");
      if(nombreGuardado !== null) {
        setNombre(nombreGuardado);
      }
      if(contraGuardada !== null) {
        setContra(contraGuardada);
      }
    } catch (e) {
      console.error("Error al obtener los datos", e);
    }
  };

  useEffect(() => {
    obtenerDatos();
  }, []);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Usuario: {nombre}</Text>
      <Text style={styles.title}>Contraseña: {contra}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    fontSize: 30,
    fontWeight: "bold",
  },
  botonVolver: {
    backgroundColor: "#007bff",
    padding: 10,
    borderRadius: 5,
    marginTop: 20,
  },
  buttonText: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "bold",
  },
});
import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useState, useEffect } from "react";
import { Formik } from "formik";
import * as yup from "yup";

const schema = yup.object().shape({
  nombre: yup.string().required("El nombre es obligatorio"),
  contra: yup
    .string()
    .required("La contraseña es obligatoria")
    .min(8, "La contraseña debe tener al menos 8 caracteres"),
});

export default function InicioSesion({ navigation }) {
  useEffect(() => {
    cargarDatos();
  }, []);

  const guardarDatos = async (nombre, contra) => {
    try {
      await AsyncStorage.setItem("@nombre_usuario", nombre);
      await AsyncStorage.setItem("@contra_usuario", contra);
      navigation.navigate("PrimeraPantalla");
    } catch (e) {
      console.error("Error al guardar los cambios", e);
    }
  };

  const cargarDatos = async () => {
    try {
      const nombreGuardado = await AsyncStorage.getItem("@nombre_usuario");
      const contraGuardada = await AsyncStorage.getItem("@contra_usuario");
      if (nombreGuardado && contraGuardada) {
        return { nombre: nombreGuardado, contra: contraGuardada };
      }
      return { nombre: "", contra: "" };
    } catch (e) {
      console.error("Error al cargar los datos", e);
      return { nombre: "", contra: "" };
    }
  };

  return (
    <Formik
      initialValues={{ nombre: "", contra: "" }}
      validationSchema={schema}
      onSubmit={(values) => {
        guardarDatos(values.nombre, values.contra);
      }}
    >
      {({ handleChange, handleSubmit, values, errors, touched }) => (
        <View style={styles.container}>
          <TextInput
            placeholder="Usuario"
            style={styles.TextInput}
            value={values.nombre}
            onChangeText={handleChange('nombre')}
          />
          {errors.nombre && touched.nombre && (
            <Text style={styles.errorText}>{errors.nombre}</Text>
          )}
          
          <TextInput
            placeholder="Contraseña"
            secureTextEntry={true}
            style={styles.TextInput}
            value={values.contra}
            onChangeText={handleChange('contra')}
          />
          {errors.contra && touched.contra && (
            <Text style={styles.errorText}>{errors.contra}</Text>
          )}
          
          <TouchableOpacity 
            style={styles.TouchableOpacity} 
            onPress={handleSubmit}
          >
            <Text style={styles.buttonText}>Iniciar Sesión</Text>
          </TouchableOpacity>
          <StatusBar style="auto" />
        </View>
      )}
    </Formik>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  TextInput: {
    padding: 10,
    margin: 10,
    width: "80%",
    borderColor: "gray",
    borderWidth: 1,
    borderRadius: 5,
    fontSize: 16,
    backgroundColor: "#f2f2f2",
  },
  TouchableOpacity: {
    padding: 10,
    backgroundColor: "#4CAF50",
    borderRadius: 5,
    margin: 10,
    width: "80%",
    justifyContent: "center",
    alignItems: "center",
  },
  buttonText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold",
  },
  errorText: {
    color: 'red',
    fontSize: 12,
    marginTop: -8,
    marginBottom: 8,
  }
});
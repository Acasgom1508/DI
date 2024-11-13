import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, TextInput, View } from "react-native";
import { useForm, Controller } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

const schema = yup.object().shape({
  username: yup.string().required('Nombre de usuario es requerido'),
  email: yup.string().email('Email no válido').required('Email es requerido'),
  password: yup.string().min(6, 'La contraseña debe tener al menos 6 caracteres').required('Contraseña es requerida'),
});

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.header}>Create your account</Text>
      <StatusBar style="auto" />
      <View style={styles.bigForm}>
        <View style={styles.form}>
          <Text style={styles.formText}>Username:</Text>
          <TextInput style={styles.input} />
        </View>

        <View style={styles.form}>
          <Text style={styles.formText}>Email:</Text>
          <TextInput style={styles.input} />
        </View>

        <View style={styles.form}>
          <Text style={styles.formText}>Password:</Text>
          <TextInput style={styles.input} />
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    marginTop: 50,
  },

  header: {
    fontSize: 35,
    fontWeight: "bold",
    marginBottom: 20,
    color: "#0c3c5d",
  },

  form: {
    width: "400",
    padding: 7,
    marginHorizontal: 20,
  },

  formText: {
    fontSize: 20,
    color: "#2e779f",
    fontWeight: "bold",
  },

  input: {
    width: "100%",
    marginTop: 10,
    borderRadius: 10,
    borderColor: "rgb(77, 77, 77)",
    borderWidth: 1,
    paddingHorizontal: 10,
    fontSize: 16,
  },
});

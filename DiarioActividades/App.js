import React, { useState } from "react";
import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  Modal,
  Alert,
} from "react-native";
import { FIREBASE_AUTH, FIRESTORE_DB } from "./firebaseConfig";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { collection, addDoc, query, where, getDocs } from "firebase/firestore";

export default function App() {
  const [isModalVisible, setModalVisible] = useState(false);
  const [username, setUsername] = useState("");
  const [loginEmail, setLoginEmail] = useState("");
  const [loginPassword, setLoginPassword] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const abrirModal = () => {
    setModalVisible(true);
  };

  const cerrarModal = () => {
    setModalVisible(false);
    setUsername("");
    setEmail("");
    setPassword("");
  };

  const registrarUsuario = async () => {
    if (!username || !email || !password) {
      Alert.alert("Error", "Por favor, complete todos los campos");
      return;
    }

    try {
      // Primero verificar si el usuario ya existe
      const usuariosRef = collection(FIRESTORE_DB, "usuarios");
      const q = query(
        usuariosRef,
        where("username", "==", username),
        where("email", "==", email)
      );
      const querySnapshot = await getDocs(q);

      if (!querySnapshot.empty) {
        Alert.alert("Error", "El usuario o correo ya existe");
        return;
      }

      // Crear usuario en Authentication
      const userCredential = await createUserWithEmailAndPassword(
        FIREBASE_AUTH,
        email,
        password
      );

      // Añadir usuario a Firestore
      await addDoc(usuariosRef, {
        uid: userCredential.user.uid,
        username: username,
        email: email,
        fechaRegistro: new Date(),
      });

      Alert.alert("Éxito", "Usuario registrado correctamente");
      cerrarModal();
    } catch (error) {
      Alert.alert("Error de Registro", error.message);
    }
  };

  const iniciarSesion = async () => {
    if (!loginEmail || !loginPassword) {
      Alert.alert("Error", "Por favor, ingrese correo y contraseña");
      return;
    }

    try {
      const userCredential = await signInWithEmailAndPassword(
        FIREBASE_AUTH,
        loginEmail,
        loginPassword
      );

      // Buscar información adicional del usuario en Firestore
      const usuariosRef = collection(FIRESTORE_DB, "usuarios");
      const q = query(usuariosRef, where("email", "==", loginEmail));
      const querySnapshot = await getDocs(q);

      if (!querySnapshot.empty) {
        const userData = querySnapshot.docs[0].data();
        Alert.alert("Bienvenido", `Hola ${userData.username}`);
      } else {
        Alert.alert("Bienvenido", `Hola ${loginEmail}`);
      }
    } catch (error) {
      if (error.code === "auth/user-not-found") {
        Alert.alert("Usuario no encontrado", "¿Desea registrarse?", [
          {
            text: "Cancelar",
            style: "cancel",
          },
          {
            text: "Registrarse",
            onPress: abrirModal,
          },
        ]);
      } else if (error.code === "auth/wrong-password") {
        Alert.alert("Error", "Contraseña incorrecta. Intente nuevamente.");
      } else {
        Alert.alert("Error de Inicio de Sesión", error.message);
      }
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.texto}>Inicio de sesión</Text>
      <TextInput
        placeholder="Correo Electrónico"
        style={styles.placeholder}
        value={loginEmail}
        onChangeText={setLoginEmail}
        keyboardType="email-address"
      />
      <TextInput
        placeholder="Contraseña"
        style={styles.placeholder}
        value={loginPassword}
        onChangeText={setLoginPassword}
        secureTextEntry
      />
      <TouchableOpacity style={styles.boton} onPress={iniciarSesion}>
        <Text style={styles.botonText}>Ingresar</Text>
      </TouchableOpacity>
      <Text style={styles.registrarText} onPress={abrirModal}>
        Registrarse
      </Text>

      <Modal transparent={true} visible={isModalVisible} animationType="slide">
        <View style={styles.modalContainer}>
          <View style={styles.modalContent}>
            <Text style={styles.modalTitulo}>Registro de Usuario</Text>

            <TextInput
              placeholder="Nombre de Usuario"
              style={styles.modalInput}
              value={username}
              onChangeText={setUsername}
            />

            <TextInput
              placeholder="Correo Electrónico"
              style={styles.modalInput}
              value={email}
              onChangeText={setEmail}
              keyboardType="email-address"
            />

            <TextInput
              placeholder="Contraseña"
              style={styles.modalInput}
              value={password}
              onChangeText={setPassword}
              secureTextEntry
            />

            <View style={styles.botonesModal}>
              <TouchableOpacity
                style={styles.botonModalRegistrar}
                onPress={registrarUsuario}
              >
                <Text style={styles.botonModalTexto}>Registrar</Text>
              </TouchableOpacity>

              <TouchableOpacity
                style={styles.botonModalCancelar}
                onPress={cerrarModal}
              >
                <Text style={styles.botonModalTexto}>Cancelar</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </Modal>

      <StatusBar style="auto" />
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
  texto: {
    fontSize: 28,
    fontWeight: "bold",
    textTransform: "uppercase",
    fontFamily: "Arial",
    lineHeight: 32,
    letterSpacing: 0.5,
    marginBottom: 30,
  },
  placeholder: {
    width: 300,
    height: 50,
    borderWidth: 1,
    borderColor: "#000",
    padding: 10,
    marginBottom: 20,
    borderRadius: 5,
    backgroundColor: "#f2f2f2",
    fontSize: 18,
    color: "#000",
    fontWeight: "bold",
    textAlign: "center",
    fontFamily: "Arial",
    lineHeight: 24,
    letterSpacing: 0.5,
  },
  boton: {
    backgroundColor: "#2196F3",
    width: 150,
    height: 50,
    borderRadius: 5,
    justifyContent: "center",
    alignItems: "center",
  },
  botonText: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "bold",
    textTransform: "uppercase",
    fontFamily: "Arial",
    lineHeight: 24,
    letterSpacing: 0.5,
  },
  registrarText: {
    color: "#2196F3",
    fontSize: 16,
    fontWeight: "bold",
    textTransform: "uppercase",
    fontFamily: "Arial",
    lineHeight: 24,
    letterSpacing: 0.5,
    marginTop: 20,
    marginBottom: 20,
    textAlign: "center",
    textDecorationLine: "underline",
  },
  modalContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(0,0,0,0.5)",
  },
  modalContent: {
    width: 300,
    padding: 20,
    backgroundColor: "white",
    borderRadius: 10,
    alignItems: "center",
  },
  modalTitulo: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 20,
  },
  modalInput: {
    width: "100%",
    height: 50,
    borderWidth: 1,
    borderColor: "#000",
    marginBottom: 15,
    paddingHorizontal: 10,
    borderRadius: 5,
  },
  botonesModal: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: "100%",
  },
  botonModalRegistrar: {
    backgroundColor: "#2196F3",
    padding: 10,
    borderRadius: 5,
    width: "48%",
    alignItems: "center",
  },
  botonModalCancelar: {
    backgroundColor: "#f44336",
    padding: 10,
    borderRadius: 5,
    width: "48%",
    alignItems: "center",
  },
  botonModalTexto: {
    color: "white",
    fontWeight: "bold",
  },
});

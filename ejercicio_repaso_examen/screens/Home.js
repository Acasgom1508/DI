import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Image,
  Animated,
  FlatList,
  Pressable,
} from "react-native";
import React, { useRef, useEffect } from "react";

export default function Home({ navigation }) {
  const categorias = [
    { id: "1", title: "Tecnologia" },
    { id: "2", title: "Ropa" },
    { id: "3", title: "Hogar" },
    { id: "4", title: "Muebles" },
    { id: "5", title: "Juegos" },
    { id: "6", title: "Alimentacion" },
    { id: "7", title: "Deportes" },
    { id: "8", title: "Hobbies" },
    { id: "9", title: "Ocio" },
    { id: "10", title: "Mascotas" },
    { id: "11", title: "Entretenimiento" },
    { id: "12", title: "Salud" },
    { id: "13", title: "Cuidado Personal" },
  ];
  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>ShopEase</Text>
      <Text style={styles.subtitulo}>
        Bienvenido a ShopEase, donde encontrarás una gran variedad de productos
      </Text>
      <Image
        source={require("../assets/logo-shopease.jpg")}
        style={styles.imagen}
      />
      <FlatList
        style={styles.lista}
        data={categorias}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <Text style={styles.textoFlatList}>{item.title}</Text>
        )}
      />
      <Pressable
        style={styles.pressable}
        onPress={() => navigation.navigate("Catalogo")}
      >
        <Text style={styles.textoPressable}>Ir a catalogo</Text>
      </Pressable>
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

  titulo: {
    fontSize: 70,
    marginBottom: 10,
    fontWeight: "bold",
    color: "#157cb2",
  },

  subtitulo: {
    fontSize: 18,
    marginBottom: 10,
    color: "#888",
    maxWidth: "85%",
    textAlign: "center",
  },

  imagen: {
    width: 200,
    height: 200,
    marginBottom: 20,
    resizeMode: "contain",
    borderRadius: 10,
  },

  lista: {
    width: "85%",
    maxHeight: "25%",
    marginBottom: 20,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: "#ddd",
    padding: 10,
  },

  textoFlatList: {
    fontSize: 18,
    marginBottom: 10,
    color: "#333",
    fontWeight: "bold",
    textAlign: "center",
  },

  pressable: {
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 2,
    borderWidth: 1,
    borderColor: "#ddd",
    borderRadius: 10,
    backgroundColor: "#157cb2",
  },

  textoPressable: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold",
    padding: 10,
    textAlign: "center",
  },
});

import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import { StyleSheet, Text, View, Pressable} from "react-native";

const URL = 'https://dummyjson.com/recipes/1';
export default function App() {
  const [receta, setReceta] = useState(null);

  const obtenerReceta=()=>{
    fetch(URL)
   .then(res => res.json())
   .then(console.log('Receta obtenida:', receta))
   .catch(error=>console.error(error));
  }

  return(
    <View style={styles.container}>
      <Pressable onPress={obtenerReceta}>
        <Text>Obtener receta</Text>
      </Pressable>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
 
import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  TextInput,
  View,
  Button,
  TouchableOpacity,
  FlatList,
} from "react-native";

export default function App() {
  const [texto, setTexto] = useState(""); // texto de la nueva tarea
  const [lista, setLista] = useState([]); // lista de tareas

  const AgregaTarea = () => {
    if (texto != "") {
      setLista([...lista, { id: Date.now().toString(), value: texto}]);
      setTexto("");
    } else alert("Escriba una tarea");
  };

  const Eliminartarea = () => {
    alert("tonto");
  };

  return (
    <View style={styles.container}>
      <View style={styles.encabezado}>
        <TextInput
          placeholder="Añadir tarea"
          style={styles.entrada}
          placeholderTextColor={"#ffffff"}
          value={texto}
          onChangeText={setTexto}
          onSubmitEditing={AgregaTarea}
        />
        <TouchableOpacity onPress={AgregaTarea} style={styles.boton}>
          <Text style={{ marginHorizontal: 2 }}>Agregar tarea</Text>
        </TouchableOpacity>
      </View>

      <FlatList
        data={lista}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View
            style={{
              flex: 1,
              flexDirection: "row",
              backgroundColor: "#222438",
              borderRadius: 7,
              padding: 10,
              marginBottom: 15,
              marginHorizontal: 15,
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            <Text style={{ color: "#fff" }}>{item.value}</Text>
            <TouchableOpacity onPress={Eliminartarea} style={{}}>
              <Text style={{ color: "#ff4141", fontWeight: "bold", fontSize: 15 }}>❌Eliminar </Text>
            </TouchableOpacity>
          </View>
        )}
      ></FlatList>
      <StatusBar style="light" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#141524",
  },

  encabezado: {
    alignItems: "center",
    flexDirection: "row",
    marginTop: 100,
    marginHorizontal: 10,
    marginBottom: 15,
  },

  entrada: {
    borderWidth: 3,
    borderColor: "rgb(255, 255, 255)",
    borderRadius: 7,
    fontSize: 15,
    flex: 1,
    marginRight: 10,
    paddingLeft: 10,
    color: "#fff",
  },

  boton: {
    backgroundColor: "#999ef3",
    padding: 7,
    borderRadius: 7,
  },
});

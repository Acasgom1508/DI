import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  TextInput,
  View,
  TouchableOpacity,
  FlatList,
} from "react-native";

export default function App() {
  const [texto, setTexto] = useState(""); // texto de la nueva tarea
  const [lista, setLista] = useState([]); // lista de tareas

  const AgregaTarea = () => {
    if (texto !== "") {
      setLista([{ id: Date.now().toString(), value: texto, completada: false }, ...lista]);
      setTexto("");
    } else alert("Escriba una tarea");
  };

  const AlternarCompletada = (id) => {
    setLista(
      lista.map((item) =>
        item.id === id ? { ...item, completada: !item.completada } : item
      )
    );
  };

  const Eliminartarea = (id) => {
    setLista(lista.filter((item) => item.id !== id));
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
          <Text style={{ marginHorizontal: 2, fontSize: 25 }}>
            Agregar tarea
          </Text>
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
              backgroundColor: item.completada ? "#222438" : "#3d3f5a",
              borderRadius: 7,
              padding: 10,
              marginBottom: 15,
              marginHorizontal: 15,
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            <TouchableOpacity onPress={() => AlternarCompletada(item.id)}>
              <Text style={{ fontSize: 24 }}>{item.completada ? "✅" : "✔️"}</Text>
            </TouchableOpacity>
            <Text
              style={{
                color: item.completada ? "#888" : "#fff",
                textDecorationLine: item.completada ? "line-through" : "none",
                fontSize: 20,
              }}
            >
              {item.value}
            </Text>
            <TouchableOpacity onPress={() => Eliminartarea(item.id)}>
              <Text style={{ color: "#ff4141", fontWeight: "bold", fontSize: 20 }}>❌</Text>
            </TouchableOpacity>
          </View>
        )}
      />
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
    fontSize: 25,
    flex: 1,
    marginRight: 10,
    paddingLeft: 10,
    color: "#fff",
  },

  boton: {
    backgroundColor: "#999ef3",
    padding: 3,
    borderRadius: 7,
  },
});

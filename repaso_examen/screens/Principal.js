import { StatusBar } from "expo-status-bar";
import {
  Button,
  StyleSheet,
  Text,
  View,
  ScrollView,
  Image,
  FlatList,
  Pressable,
} from "react-native";

export default function App({ navigation }) {
    const data = [
        { id: "1", title: "Real Madrid" },
        { id: "2", title: "FC Barcelona" },
        { id: "3", title: "Atlético de Madrid" },
        { id: "4", title: "Sevilla FC" },
        { id: "5", title: "Real Sociedad" },
        { id: "6", title: "Villarreal CF" },
        { id: "7", title: "Real Betis" },
        { id: "8", title: "Athletic Club" },
        { id: "9", title: "Valencia CF" },
        { id: "10", title: "Celta de Vigo" },
      ];
      

  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Pantalla Principal</Text>

      <ScrollView
        style={{ maxHeight: 150, maxWidth: 350 }}
        contentContainerStyle={{ alignItems: "center" }}
      >
        <Text style={{ marginTop: 15 }}>Hola soy vinicius</Text>
        <Image
          style={{ width: 150, height: 150, resizeMode: "center" }}
          source={require("../assets/vini.jpg")}
        />
        <Text style={{ marginTop: 15 }}>Hola soy vinicius</Text>
        <Image
          style={{ width: 150, height: 50, resizeMode: "contain" }}
          source={require("../assets/vini.jpg")}
        />
        <Text style={{ marginTop: 15 }}>Hola soy vinicius</Text>
        <Image
          style={{ width: 150, height: 50, resizeMode: "stretch" }}
          source={require("../assets/vini.jpg")}
        />
      </ScrollView>

      <FlatList
        data={data}
        keyExtractor={(item) => item.id} // Establece una clave única para cada elemento
        renderItem={({ item }) => (
          <Text style={styles.textoFlatList}>{item.title}</Text>
        )}
        style={{ margin: 20, maxHeight: 150 }}
      />

      <Pressable
        style={styles.pressable}
        onPress={() => console.log("Pressable pulsado")}
      >
        <Text style={styles.textoPressable}>Presióname</Text>
      </Pressable>

      <Button title="Ir a Hooks" onPress={() => navigation.navigate("Hooks")} />
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

  titulo: {
    fontSize: 30,
    fontWeight: "bold",
    color: "#0c3c5d",
    marginBottom: 20,
  },

  textoFlatList: {
    marginTop: 10,
    fontSize: 18,
    fontWeight: "bold",
    color: "#0c3c5d",
    padding: 10,
    backgroundColor: "#f2f2f2",
    borderRadius: 5,
    marginBottom: 5,
    textAlign: "center",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.8,
    shadowRadius: 2,
    elevation: 5,
    borderWidth: 1,
    borderColor: "#0c3c5d",
  },

  pressable: {
    backgroundColor: "#0c3c5d",
    padding: 10,
    borderRadius: 5,
    marginVertical: 10,
    alignItems: "center",
  },

  textoPressable: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold",
  },
});

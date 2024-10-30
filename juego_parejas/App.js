import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";

const cartas = ["red", "blue", "green", "yellow", "purple", "orange"];
const baraja = [...cartas, ...cartas];
function Barajar(baraja) {
  for (let i = baraja.length - 1; i > 0; i--) {
    let j = Math.floor(Math.random() * (i + 1));
    [baraja[i], baraja[j]] = [baraja[j], baraja[i]];
  }
}

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={{ fontSize: 40, fontWeight: "bold" }}>Juego de cartas</Text>
      <View style={styles.cajabaraja}>
        {Barajar(baraja)}
        {baraja.map((carta, index) => (
          <View
            key={index}
            style={{
              backgroundColor: carta,
              width: 80,
              height: 80,
              margin: 10,
              borderWidth: 2,
              borderColor: "black",
              borderRadius: 5,
              justifyContent: "center",
              alignItems: "center",
              elevation: 5,
              shadowColor: "#000",
            }}
          >
            <Text style={{ fontSize: 15, fontWeight: "bold", color: "black" }}>
              {carta}
            </Text>
          </View>
        ))}
      </View>
      <View style={{ marginTop: 50 }}>
        <TouchableOpacity style={styles.boton} onPress={Barajar(baraja)}>
          <Text style={{ fontSize: 20, fontWeight: "bold", color: "white" }}>
            Reiniciar
          </Text>
        </TouchableOpacity>
      </View>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    marginTop: 80,
  },

  cajabaraja: {
    flexWrap: "wrap",
    flexDirection: "row",
    justifyContent: "space-around",
    width: "85%",
    marginTop: 50,
  },

  boton: {
    backgroundColor: "#333",
    padding: 15,
    borderRadius: 7,
    width: 150,
    alignItems: "center",
    justifyContent: "center",
    elevation: 5,
  },
});

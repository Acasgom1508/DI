import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import { useState } from "react";

const cartas = ["red", "blue", "green", "yellow", "purple", "orange"];
const barajaInicial = [...cartas, ...cartas];

function Barajar(baraja) {
  for (let i = baraja.length - 1; i > 0; i--) {
    let j = Math.floor(Math.random() * (i + 1));
    [baraja[i], baraja[j]] = [baraja[j], baraja[i]];
  }
  return baraja;
}

export default function App() {
  const [baraja, setBaraja] = useState(Barajar([...barajaInicial]));
  const [mostrandoColores, setMostrandoColores] = useState(
    Array(baraja.length).fill(false)
  );
  const [seleccionadas, setSeleccionadas] = useState([]);

  const reiniciar = () => {
    setBaraja(Barajar([...barajaInicial]));
    setMostrandoColores(Array(baraja.length).fill(false)); // Reinicia la visibilidad de colores
    setSeleccionadas([]); // Reinicia las cartas seleccionadas
  };

  const manejarPresion = (index) => {
    if (mostrandoColores[index] || seleccionadas.length >= 2) return; // No hacer nada si ya está dada la vuelta o si ya hay 2 cartas seleccionadas

    const nuevoEstado = [...mostrandoColores];
    nuevoEstado[index] = true; // Da la vuelta a la carta seleccionada
    setMostrandoColores(nuevoEstado);

    const nuevasSeleccionadas = [...seleccionadas, index]; // Agrega la carta seleccionada a la lista
    setSeleccionadas(nuevasSeleccionadas);

    if (nuevasSeleccionadas.length === 2) {
      // Solo comprobar si hay dos cartas seleccionadas
      const [primera, segunda] = nuevasSeleccionadas;

      // Comprobar si son iguales
      if (baraja[primera] === baraja[segunda]) {
        // Si son iguales, hacerlas de color verde y "eliminarlas"
        setTimeout(() => {
          const cartasActualizadas = [...baraja];
          cartasActualizadas[primera] = null; // Establece en null para eliminarlas de la baraja
          cartasActualizadas[segunda] = null; // Establece en null para eliminarlas de la baraja
          const coloresActualizados = [...mostrandoColores];
          coloresActualizados[primera] = true; // Muestra la carta como encontrada
          coloresActualizados[segunda] = true; // Muestra la carta como encontrada
          setBaraja(cartasActualizadas); // Actualiza la baraja para reflejar que se eliminaron
          setMostrandoColores(coloresActualizados);
          setSeleccionadas([]); // Reinicia la selección
        }, 300); // Espera un segundo para mostrar la coincidencia antes de cambiar el color
      } else {
        // Si no son iguales, darles la vuelta después de un corto retraso
        setTimeout(() => {
          const cartasActualizadas = [...mostrandoColores];
          cartasActualizadas[primera] = false;
          cartasActualizadas[segunda] = false;
          setMostrandoColores(cartasActualizadas);
          setSeleccionadas([]); // Reinicia la selección
        }, 300); // Espera un segundo antes de volver a darles la vuelta
      }
    }
  };

  return (
    <View style={styles.container}>
      <Text style={{ fontSize: 40, fontWeight: "bold" }}>Juego de cartas</Text>
      <View style={styles.cajabaraja}>
        {baraja.map((carta, index) => (
          <TouchableOpacity key={index} onPress={() => manejarPresion(index)}>
            <View
              style={{
                backgroundColor: mostrandoColores[index]
                  ? carta === null
                    ? "rgba(43, 43, 43, 0.23)"
                    : carta
                  : "rgb(129, 112, 76)",
                width: 80,
                height: 80,
                margin: 10,
                borderWidth: 2,
                borderColor: mostrandoColores[index]
                  ? carta === null
                    ? "grey"
                    : "black"
                  : "rgb(129, 112, 76)",
                borderRadius: 5,
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              {!mostrandoColores[index] && (
                <Text style={{ fontSize: 30 }}>🤔</Text>
              )}
            </View>
          </TouchableOpacity>
        ))}
      </View>
      <View style={{ marginTop: 50 }}>
        <TouchableOpacity style={styles.boton} onPress={reiniciar}>
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

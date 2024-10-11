import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  ImageBackground,
  TouchableOpacity,
  Image,
} from "react-native";

export default function App() {
  // Estado para almacenar el puntaje 1
  const [puntaje1, setPuntaje1] = useState(50);
  const [puntaje2, setPuntaje2] = useState(50);

  // Función para incrementar el puntaje 1
  const incrementarPuntaje1 = () => {
    setPuntaje1(puntaje1 + 1);
  };

  const incrementarPuntaje1_5 = () => {
    setPuntaje1(puntaje1 + 5);
  };

  const bajarPuntaje1 = () => {
    if (puntaje1 > 0) {
      setPuntaje1(puntaje1 - 1);
    }else {
      alert("GANO LA CABRA");
    }
  };

  const bajarPuntaje1_5 = () => {
    if (puntaje1 > 0) {
      setPuntaje1(puntaje1 - 5);
    }else {
      alert("GANO LA CABRA");
    }
  };

  const incrementarPuntaje2 = () => {
    setPuntaje2(puntaje2 + 1);
  };

  const incrementarPuntaje2_5 = () => {
    setPuntaje2(puntaje2 + 5);
  };

  const bajarPuntaje2 = () => {
    if (puntaje2 > 0) {
      setPuntaje2(puntaje2 - 1);
    }else {
      alert("GANA FAIRY GF");
    }
  };

  const bajarPuntaje2_5 = () => {
    if (puntaje2 > 0) {
      setPuntaje2(puntaje2 - 5);
    }else {
      alert("GANA FAIRY GF");
    }
  };



  return (
    <View style={styles.container}>
      <ImageBackground
        source={require("./assets/Elementos/entero_sinbotones.jpg")}
        style={styles.container}
      >
        {/* Elementos azu */}
        <Text style={styles.puntaje1}>{puntaje1}</Text>

        {/* Botón azu 1 */}
        <TouchableOpacity style={styles.azu_boton1} onPress={bajarPuntaje1} onLongPress={bajarPuntaje1_5}>
          <Image
            source={require("./assets/Elementos/botonazu1.png")}
            style={styles.botonImagen}
          />
        </TouchableOpacity>

        {/* Botón azu 2 */}
        <TouchableOpacity style={styles.azu_boton2} onPress={incrementarPuntaje1} onLongPress={incrementarPuntaje1_5}>
          <Image
            source={require("./assets/Elementos/botonazu-1.png")}
            style={styles.botonImagen}
          />
        </TouchableOpacity>

        {/* Elementos toni */}
        <Text style={styles.puntaje2}>{puntaje2}</Text>

        {/* Botón toni 1 */}
        <TouchableOpacity style={styles.toni_boton1} onPress={incrementarPuntaje2} onLongPress={incrementarPuntaje2_5}>
          <Image
            source={require("./assets/Elementos/botontoni1.png")}
            style={styles.botonImagen}
          />
        </TouchableOpacity>

        {/* Botón toni 2 */}
        <TouchableOpacity style={styles.toni_boton2} onPress={bajarPuntaje2} onLongPress={bajarPuntaje2_5}>
          <Image
            source={require("./assets/Elementos/botontoni-1.png")}
            style={styles.botonImagen}
          />
        </TouchableOpacity>
      </ImageBackground>

      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },

  puntaje1: {
    position: "absolute",
    top: 210,
    left: 200,
    fontSize: 100,
    fontWeight: "bold",
    color: "#fa8cd1",
    transform: [{ rotate: "180deg" }],
  },

  puntaje2: {
    position: "absolute",
    top: 540,
    left: 200,
    fontSize: 100,
    fontWeight: "bold",
    color: "#9ce2fc",
  },

  // Contenedores de los botones (TouchableOpacity)
  azu_boton1: {
    position: "absolute",
    top: 160,
    left: 65,
    width: 100,
    height: 100,
  },
  azu_boton2: {
    position: "absolute",
    top: 280,
    left: 65,
    width: 100,
    height: 100,
  },
  toni_boton1: {
    position: "absolute",
    top: 505,
    left: 70,
    width: 80,
    height: 80,
  },
  toni_boton2: {
    position: "absolute",
    top: 610,
    left: 70,
    width: 80,
    height: 80,
  },

  // Estilo de las imágenes
  botonImagen: {
    width: "100%",
    height: "100%",
    resizeMode: "contain",
  },
});

import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  Alert,
} from "react-native";
import axios from "axios";
import Feather from "react-native-vector-icons/Feather";
export default function App() {
  const [clima, setClima] = useState(null);
  const [provincia, setProvincia] = useState("");

  const URL = "https://www.el-tiempo.net/api/json/v2/provincias/";
  const provincias = {
    almeria: "04",
    cadiz: "11",
    cordoba: "14",
    granada: "18",
    huelva: "21",
    jaen: "23",
    malaga: "29",
    sevilla: "41",
  };

  const quitarTildes = (texto) => {
    return texto.normalize("NFD").replace(/[\u0300-\u036f]/g, "");
  };

  const obtenerDatos = async () => {
    const codigoProv = provincias[quitarTildes(provincia.trim().toLowerCase())];
    if (!codigoProv) {
      Alert.alert("Introduzca una provincia de Andalucía");
      return;
    }
    try {
      const response = await axios.get(`${URL}${codigoProv}`);
      console.log(response.data);
      setClima(response.data);
    } catch (error) {
      console.error("Error:", error);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={{ fontSize: 50, fontWeight: "bold", marginBottom: 35 }}>
        Aplicación clima
      </Text>
      <View style={styles.pedir}>
        <TextInput
          style={styles.cuadroTexto}
          placeholder="Provincia de Andalucía"
          value={provincia}
          onChangeText={setProvincia}
        />

        <TouchableOpacity style={styles.boton} onPress={obtenerDatos}>
          <Feather name="search" size={30} color="white" />
        </TouchableOpacity>
      </View>
      {clima && (
        <View style={styles.info}>
          <Text style={styles.textoInformacion}>
            Condiciones meteorológicas hoy: {clima.today.p}
          </Text>
          <Text style={styles.textoInformacion}>
            Temperatura máxima: {clima.ciudades[0].temperatures.max}°C
          </Text>
          <Text style={styles.textoInformacion}>
            Temperatura mínima: {clima.ciudades[0].temperatures.min}°C
          </Text>
        </View>
      )}
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#b8def8",
    alignItems: "center",
    justifyContent: "center",
  },

  imagen: {
    position: "absolute",
    top: -75,
  },

  pedir: {
    marginBottom: 10,
    flexDirection: "row",
    justifyContent: "space-between",
  },

  cuadroTexto: {
    width: "60%",
    height: 40,
    borderColor: "gray",
    borderWidth: 1,
    paddingHorizontal: 10,
    borderRadius: 10,
    marginBottom: 10,
    fontSize: 16,
    color: "black",
  },

  boton: {
    backgroundColor: "rgb(26, 70, 124)",
    paddingHorizontal: 10,
    height: 50,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 50,
    marginLeft: 10,
    marginTop: -5,
  },

  info: {
    paddingVertical: 20,
    paddingHorizontal: 20,
    width: "90%",
    backgroundColor: "white",
    borderRadius: 20,
    marginTop: 10,
    alignItems: "center",
  },

  textoInformacion: {
    fontSize: 20,
    marginBottom: 5,
  },
});

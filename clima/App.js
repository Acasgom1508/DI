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
import axios from 'axios';
export default function App() {
  const [clima, setClima] = useState(null);
  const [provincia, setProvincia] = useState("");

  const URL = "https://www.el-tiempo.net/api/json/v2/provincias/";
  const provincias = {
    almería: "04",
    cádiz: "11",
    córdoba: "14",
    granada: "18",
    huelva: "21",
    jaén: "23",
    málaga: "29",
    sevilla: "41",
  };

  const quitarTildes = (texto) => {
    return texto.normalize("NFD").replace(/[\u0300-\u036f]/g, "");
  };

  const obtenerDatos = async () => {
    const codigoProv = provincias[quitarTildes(provincia.trim().toLowerCase())];
    if (!codigoProv) {
      Alert.alert(
        "Por favor, introduce el nombre de una provincia de Andalucía."
      );
      return;
    }
    try {
      const response = await axios.get(`${URL}${codigoProv}`);
      console.log(response.data);
      setClima(response.data);
    } catch (error) {
      console.error("Error al obtener los datos:", error);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={{ fontSize: 50, fontWeight: "bold", marginBottom: 35 }}>
        Aplicación clima
      </Text>
      <View style={styles.pedir}>
        <Text style={{ fontSize: 20, marginTop: 5, marginRight: 10 }}>
          Provincia:
        </Text>
        <TextInput
          style={styles.cuadroTexto}
          placeholder="Provincia"
          value={provincia}
          onChangeText={setProvincia}
        />

        <TouchableOpacity style={styles.boton} onPress={obtenerDatos}>
          <Text style={{ fontSize: 20, fontWeight: "bold" }}>🔍</Text>
        </TouchableOpacity>
      </View>
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
    height: 40,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 10,
    marginLeft: 10,
  },
});

/*import { StatusBar } from 'expo-status-bar';
import { useState } from "react";
import { StyleSheet, Text, View, TextInput, Alert, Button } from 'react-native';
import axios from 'axios';

export default function App() {
   const [clima, setClima] = useState(null);
   const [provincia, setProvincia] = useState('');

   const baseURL = "https://www.el-tiempo.net/api/json/v2/provincias/";
    const provincias = {
      "almería": "04",
      "cádiz": "11",
      "córdoba": "14",
      "granada": "18",
      "huelva": "21",
      "jaén": "23",
      "málaga": "29",
      "sevilla": "41",
    };

  const quitarTildes = (texto) => {
    return texto.normalize("NFD").replace(/[\u0300-\u036f]/g, "");
  };

   const obtenerDatos = async () => {
        const codigoProv = provincias[quitarTildes(provincia.trim().toLowerCase())];
        if (!codigoProv) {
              Alert.alert('Por favor, introduce el nombre de una provincia de Andalucía.');
              return;
        }
        try {
   	        const response = await axios.get(`${URL}${codigoProv}`);
   	        console.log(response.data);
   	        setClima(response.data);
        } catch (error) {
   	        console.error('Error al obtener los datos:', error);
        }};

  return (
    <View style={styles.container}>
      <Text>Introduce una provincia de Andalucía para conocer su clima en tiempo real</Text>
      <StatusBar style="auto" />
        <TextInput
              style={styles.input}
              placeholder="Provincia de Andalucía"
              value={provincia}
              onChangeText={setProvincia}
            />
         <Button title="Obtener Clima" onPress={obtenerDatos} />
        {clima && (
            <View>
                <Text style={styles.Text}>Condiciones meteorológicas hoy: {clima.today.p}</Text>
                <Text style={styles.Text}>Temperatura máxima: {clima.ciudades[0].temperatures.max}°C</Text>
                 <Text style={styles.Text}>Temperatura mínima: {clima.ciudades[0].temperatures.min}°C</Text>
            </View>
        )}

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
   input: {
      borderWidth: 1,
      borderColor: '#ddd',
      padding: 10,
      marginBottom: 10,
      borderRadius: 5,
    },
  Text: {
      fontSize: 20,
      marginBottom: 5,
    },
});
*/

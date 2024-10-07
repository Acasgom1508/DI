import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  Text,
  View,
  Image,
  Alert,
  Button,
  TouchableOpacity,
} from "react-native";
import React from "react";

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.container1}>Buenas mundo</Text>
      <TouchableOpacity
        style={styles.tocable}
        onPress={() => Alert.alert("Hola don pepito")}
      >
        <Text style={styles.container2}>"Pulsame"</Text>
      </TouchableOpacity>
      <StatusBar style="auto" />
      <Image
        source={{
          uri: "https://i0.wp.com/holanews.com/wp-content/uploads/2022/10/rss-efe3b0e82d893377f760ff68557191bcfb12c012763w.jpg?fit=1325%2C1920&ssl=1",
        }}
        style={{
          width: 380,
          height: 380,
          resizeMode: "Stretch",
          borderRadius: 13,
        }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#2f2f30",
    alignItems: "center",
    justifyContent: "center",
  },

  container1: {
    color: "rgb(255, 255, 255)",
    backgroundColor: "rgba(0, 0, 0, 0.49)",
    marginBottom: 10,
    fontSize: 25,
    padding: 7,
    borderRadius: 7,
  },

  container2: {
    color: "rgb(255, 255, 255)",
    fontSize: 25,
    padding: 7,
    borderRadius: 7,
  },

  tocable: {
    backgroundColor:"rgba(255, 0, 0, 0.6)",
    borderRadius: 15,
    justifyContent: "center",
    marginBottom: 10
  },
});

import { View, Text, TouchableOpacity, StyleSheet, Image } from "react-native";

export function PantallaBienvenida({ navigation }) {
  return (
    <View style={styles.container}>
      <Image
        source={require("../assets/Presentacion/foto-pagina-bienvenida.png")}
        style={{ width: 600, height: 590, marginRight: 100 }}
      />
      <Text style={{ fontSize: 25, fontWeight: "bold", paddingTop: 30 }}>
        Track your Active Lifestyle
      </Text>
      <Text style={{ paddingTop: 10, fontSize: 15 }}>
        Find your way to the perfect body
      </Text>
      <Image
        source={require("../assets/Presentacion/slider.png")}
        style={{ marginTop: 20, width: 70, height: 30, resizeMode: "contain" }}
      />
      <TouchableOpacity
        style={styles.getStarted}
        onPress={() => navigation.navigate("Pantallas")}
      >
        <Text style={{ fontSize: 20, color: "#fff" }}>Get Started</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: "#fff",
      alignItems: "center",
    },
  
    getStarted: {
      backgroundColor: "#000000",
      borderRadius: 20,
      paddingVertical: 20,
      paddingHorizontal: 50,
      color: "#ffffff",
      display: "inline-block",
      alignItems: "center",
      marginTop: 20,
    },
  });
  

/* */

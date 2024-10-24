import {
    View,
    Text,
    TouchableOpacity,
    StyleSheet,
  } from "react-native";
  
  export function PantallaEstadisticas({ navigation }) {
    return (
      <View style={styles.container}>
        <Text>Estadísticas</Text>
        <TouchableOpacity onPress={() => navigation.navigate("Bienvenida")}>
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
  });
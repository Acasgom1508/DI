import {
  View,
  Text,
  Button,
  TouchableOpacity,
  StyleSheet,
  Image,
} from "react-native";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";

export function PantallaPrincipal({ navigation }) {
  return (
    <View style={styles.container}>
      <Text>Pantalla Principal</Text>
      <TouchableOpacity onPress={() => navigation.navigate("Bienvenida")}>
        <MaterialIcons name="home" size={30} color="#000000" />
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

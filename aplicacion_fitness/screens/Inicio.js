import { View, Text, Button, TouchableOpacity, StyleSheet, Image } from "react-native";

export function PantallaPrincipal({ navigation }) {
  return (
    <View style={styles.container}>
      <Text>Pantalla Principal</Text>
      <Button
        title="<"
        onPress={() => navigation.navigate("Bienvenida")}
      />
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

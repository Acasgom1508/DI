import { View, Text, StyleSheet } from "react-native";

export function PantallaPrincipal() {
  return (
    <View style={styles.encabezado}>
      <Text style={styles.titulo1}>Find your</Text>
      <Text style={styles.subTitulo1}>activity</Text>
    </View>
  );
}

const styles = StyleSheet.create({

  encabezado: {
    flex: 1,
    backgroundColor: '#ffffff',
  },

  titulo1: {
    fontSize: 55,
    marginLeft: 35,
    marginTop: 120,
    fontWeight: "300",
  },

  subTitulo1: {
    fontSize: 55,
    marginLeft: 35,
    fontWeight: "500",
  }
});

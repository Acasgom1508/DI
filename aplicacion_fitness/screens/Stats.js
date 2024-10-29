import { View, Text, Image, TouchableOpacity, StyleSheet } from "react-native";
import Feather from "react-native-vector-icons/Feather";

export function PantallaEstadisticas({ navigation }) {
  return (
    <View style={styles.container}>
      <View style={styles.controles}>
        <TouchableOpacity
          style={{ marginTop: 51, marginLeft: 31 }}
          onPress={() => navigation.navigate("Inicio")}
        >
          <Feather name="chevron-left" size={35} color="#000" />
        </TouchableOpacity>
        <TouchableOpacity style={{ marginTop: 51, marginRight: 31 }}>
          <Feather name="menu" size={35} color="#000" />
        </TouchableOpacity>
      </View>
      <View style={styles.perfil}>
        <Image
          style={{ height: 50, width: 50, borderRadius: 50 }}
          source={require("../assets/Presentacion/chica.png")}
        />

        <View style={{ marginLeft: 13, marginTop: 5 }}>
          <Text style={{ fontWeight: "500", fontSize: 14 }}>
            Adline Castelino
          </Text>
          <Text style={{ color: "grey", fontSize: 14 }}>United States</Text>
        </View>
      </View>

      <View style={styles.apartados}>
        <TouchableOpacity style={{ background: "transparent" }}>
          <Text style={styles.textoApartados}>April</Text>
        </TouchableOpacity>
        <TouchableOpacity style={{ background: "transparent" }}>
          <Text style={styles.textoApartados}>May</Text>
        </TouchableOpacity>
        <TouchableOpacity style={{ background: "transparent" }}>
          <Text style={styles.textoApartados}>June</Text>
        </TouchableOpacity>
        <TouchableOpacity style={{ background: "transparent" }}>
          <Text style={styles.textoApartados}>July</Text>
        </TouchableOpacity>
        <TouchableOpacity style={{ background: "transparent" }}>
          <Text style={styles.textoApartados}>August</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.cabeza}>
        <Text style={{ fontWeight: "800", fontSize: 19, marginTop: 5 }}>
          Statistics
        </Text>
        <TouchableOpacity>
          <View
            style={{
              backgroundColor: "rgba(196, 196, 196, 0.2)",
              paddingVertical: 8,
              paddingHorizontal: 11,
              borderRadius: 30,
              flexDirection: "row",
            }}
          >
            <Text style={{}}>Week</Text>
            <Feather
              name="chevron-down"
              size={15}
              color="#000"
              style={{ marginLeft: 15, marginTop: 3 }}
            />
          </View>
        </TouchableOpacity>
      </View>

      <View style={{}}>
        <Image
          style={styles.barras}
          source={require("../assets/Presentacion/barras.png")}
        />
      </View>

      <View>
        <View style={{ flexDirection: "row" }}>
          <Image
            style={styles.iconos}
            source={require("../assets/Presentacion/verde.png")}
          />
          <View
            style={{
              marginTop: 24,
              marginLeft: 20,
            }}
          >
            <Text
              style={{
                fontWeight: "bold",
                fontSize: 18,
              }}
            >
              Training
            </Text>
            <Text
              style={{
                fontSize: 12,
                marginLeft: 3,
                color: "#666",
              }}
            >
              4.5 hours
            </Text>
          </View>
        </View>

        <View style={{ flexDirection: "row" }}>
          <Image
            style={styles.iconos}
            source={require("../assets/Presentacion/rojo.png")}
          />
          <View
            style={{
              marginTop: 24,
              marginLeft: 20,
            }}
          >
            <Text
              style={{
                fontWeight: "bold",
                fontSize: 18,
              }}
            >
              Steps
            </Text>
            <Text
              style={{
                fontSize: 12,
                marginLeft: 3,
                color: "#666",
              }}
            >
              24 km per week
            </Text>
          </View>
        </View>

        <View style={{ flexDirection: "row" }}>
          <Image
            style={styles.iconos}
            source={require("../assets/Presentacion/azul.png")}
          />
          <View
            style={{
              marginTop: 24,
              marginLeft: 20,
            }}
          >
            <Text
              style={{
                fontWeight: "bold",
                fontSize: 18,
              }}
            >
              Calories
            </Text>
            <Text
              style={{
                fontSize: 12,
                marginLeft: 3,
                color: "#666",
              }}
            >
              6215 calories burned
            </Text>
          </View>
        </View>

      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },

  controles: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: "100%",
  },

  perfil: {
    flexDirection: "row",
    marginLeft: 45,
    marginTop: 25,
  },

  apartados: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 50,
    alignSelf: "center",
    marginBottom: 13,
    width: "70%",
  },

  textoApartados: {
    fontSize: 15,
    fontWeight: "300",
    marginBottom: 10,
  },

  cabeza: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginRight: 30,
    marginLeft: 30,
    marginTop: 5,
  },

  barras: {
    width: "100%",
    height: 170,
    marginBottom: 20,
    resizeMode: "contain",
    marginTop: 40,
  },

  iconos: {
    width: 45,
    resizeMode: "contain",
    marginLeft: 50,
  },
});

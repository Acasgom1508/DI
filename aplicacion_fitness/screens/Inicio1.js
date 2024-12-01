import React, { useRef, useEffect } from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image,
  Animated,
} from "react-native";
import Feather from "react-native-vector-icons/Feather";

const FadeInView1 = (props) => {
  const fadeAnim = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    Animated.timing(fadeAnim, {
      toValue: 1,
      duration: 1582,
      useNativeDriver: true,
    }).start();
  }, [fadeAnim]);

  return (
    <Animated.View
      style={{
        ...props.style,
        opacity: fadeAnim,
      }}
    >
      {props.children}
    </Animated.View>
  );
};

const FadeInView2 = (props) => {
  const fadeAnim = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    Animated.timing(fadeAnim, {
      toValue: 1,
      duration: 2375,
      useNativeDriver: true,
    }).start();
  }, [fadeAnim]);

  return (
    <Animated.View
      style={{
        ...props.style,
        opacity: fadeAnim,
      }}
    >
      {props.children}
    </Animated.View>
  );
};

export function PantallaPrincipal({ navigation }) {
  return (
    <View style={styles.encabezado}>
      <View style={styles.controles}>
        <TouchableOpacity
          style={{ marginTop: 51, marginLeft: 31 }}
          onPress={() => navigation.navigate("Bienvenida")}
        >
          <Feather name="chevron-left" size={35} color="#000" />
        </TouchableOpacity>
        <TouchableOpacity style={{ marginTop: 51, marginRight: 31 }}>
          <Feather name="menu" size={35} color="#000" />
        </TouchableOpacity>
      </View>
      <Text style={styles.titulo1}>Find your</Text>
      <Text style={styles.subTitulo1}>activity</Text>
      <View style={styles.apartados}>
        <TouchableOpacity style={{ background: "transparent" }}>
          <Text style={styles.textoApartados}>Popular</Text>
        </TouchableOpacity>
        <TouchableOpacity style={{ background: "transparent" }}>
          <Text style={styles.textoApartados}>Moderate</Text>
        </TouchableOpacity>
        <TouchableOpacity style={{ background: "transparent" }}>
          <Text style={styles.textoApartados}>Intensive</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.modalidades}>
        <FadeInView1 style={styles.modalidades}>
          <Image
            source={require("../assets/Presentacion/nadador.png")}
            style={{ height: 150, resizeMode: "contain" }}
          />
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              marginTop: 10,
              width: "75%",
            }}
          >
            <Text style={{ fontWeight: "bold", fontSize: 17 }}>Swimming</Text>
            <Text style={{ fontSize: 13, color: "grey" }}>🔥430Kcal/hr</Text>
          </View>
        </FadeInView1>

        <FadeInView2 style={styles.modalidades}>
          <Image
            source={require("../assets/Presentacion/tenis.png")}
            style={{ marginTop: 35, height: 150, resizeMode: "contain" }}
          />
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              marginTop: 10,
              width: "75%",
            }}
          >
            <Text style={{ fontWeight: "bold", fontSize: 17 }}>
              Playing tennis
            </Text>
            <Text style={{ fontSize: 13, color: "grey" }}>🔥430Kcal/hr</Text>
          </View>
        </FadeInView2>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  encabezado: {
    flex: 1,
    backgroundColor: "#ffffff",
  },

  titulo1: {
    fontSize: 55,
    marginLeft: 35,
    marginTop: 35,
    fontWeight: "300",
  },

  subTitulo1: {
    fontSize: 55,
    marginLeft: 35,
    fontWeight: "500",
  },

  apartados: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 30,
    marginLeft: 37,
    marginBottom: 13,
    width: "65%",
  },

  textoApartados: {
    fontSize: 20,
    fontWeight: "300",
    marginBottom: 10,
  },

  modalidades: {
    alignItems: "center",
  },

  controles: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: "100%",
  },
});

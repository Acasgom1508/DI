import * as React from "react";
import {
  Button,
  View,
  Text,
  StyleSheet,
  FlatList,
  TouchableOpacity,
  Image,
} from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

const Stack = createNativeStackNavigator();
function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Productos" component={Principal} />
        <Stack.Screen name="Detalles" component={PantallaDeDetalles} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const prod = [
  {
    id: 1,
    nombre: "Mclaren W1",
    precio: "150.000 €",
    imagen:
      "https://hips.hearstapps.com/hmg-prod/images/original-16833-5-mclaren-w1-front-3q-high-670393d8654f2.jpg",
  },
  {
    id: 2,
    nombre: "Lavadora Ducta",
    precio: "180 €",
    imagen:
      "https://d15v10x8t3bz3x.cloudfront.net/Immagini/2022/3/16478843/640-28_31019079_09_01_f_hw90-b14939s8-ib-M.jpg",
  },
  {
    id: 3,
    nombre: "Teclado Ozone",
    precio: "60 €",
    imagen:
      "https://www.vsgamers.es/thumbnails/product_gallery_large/uploads/products/ozone/4_TECLADOS/strikeback/galeria/teclado-gaming-ozone-strikeback-rgb-galeria-6.jpg",
  },
  {
    id: 4,
    nombre: "Pizza Jamon y Queso",
    precio: "5 €",
    imagen:
      "https://sgfm.elcorteingles.es/SGFM/dctm/MEDIA02/CONTENIDOS/201506/01/00118850400245____1__600x600.jpg",
  },
  {
    id: 5,
    nombre: "Gorra",
    precio: "20 €",
    imagen:
      "https://i5-mx.walmartimages.com/mg/gm/3pp/asr/64656837-1ecd-4d81-84dc-8e399d4c2c96.b979f7a68b79876b155fb6bb93b2b70d.jpeg",
  },
  {
    id: 6,
    nombre: "Café",
    precio: "1,20 €",
    imagen:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/4/45/A_small_cup_of_coffee.JPG/1200px-A_small_cup_of_coffee.JPG",
  },
];

function Principal({ navigation }) {
  return (
    <View style={styles.container}>
      <FlatList
        style={styles.ListaProductos}
        data={prod}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <TouchableOpacity
            style={styles.lista}
            onPress={() => navigation.navigate("Detalles", { prod: item })}
          >
            <Text style={styles.productos}>{item.nombre}</Text>
          </TouchableOpacity>
        )}
      ></FlatList>
    </View>
  );
}

function PantallaDeDetalles({ route, navigation }) {
  const { prod } = route.params;
  return (
    <View style={styles.container}>
      <View style={styles.container2}>
        <Image source={{ uri: prod.imagen }} style={styles.imagen}></Image>
        <Text style={styles.datosProd}>{prod.nombre}</Text>
        <Text style={styles.datosProd}>{prod.precio}</Text>
        <Button title="Volver" onPress={() => navigation.goBack()} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: "#90DDF0",
      padding: 10,
    },
  
    container2: {
      alignItems: "center",
      backgroundColor: "#07393C",
      padding: 10,
      borderBottomLeftRadius: 50,
      borderBottomRightRadius: 50,
      width: "100%", // O puedes usar un porcentaje si quieres restringir el ancho
    },
  
    Encabezado: {
      fontSize: 30,
      fontWeight: "bold",
      marginTop: 10,
      marginBottom: 10,
      color: "#30225a",
    },
  
    ListaProductos: {
      width: "100%",
      paddingHorizontal: 10,
      marginBottom: 20,
    },
  
    lista: {
      padding: 16,
      backgroundColor: "#07393C",
      marginBottom: 10,
      borderRadius: 5,
      borderBottomRightRadius: 25,
    },
  
    productos: {
      fontSize: 30,
      fontWeight: "bold",
      color: "#F0EDEE",
    },
  
    imagen: {
      width: "100%",
      height: 200,
      marginBottom: 15,
      resizeMode: "contain",
      borderRadius: 20,
    },
  
    datosProd: {
      fontSize: 20,
      fontWeight: "bold",
      color: "#F0EDEE",
      marginBottom: 10,
    },
  });

export default App;

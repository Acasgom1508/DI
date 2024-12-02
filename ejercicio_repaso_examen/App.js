import { StatusBar } from "expo-status-bar";
import { StyleSheet, View, Dimensions } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Feather from "react-native-vector-icons/Feather";

// Importa tus componentes de pantalla
import Home from "./screens/Home";
import Catalogo from "./screens/Catalogo";
import Detalles from "./screens/Detalles";
import Carrito from "./screens/Carrito";
import Perfil from "./screens/Perfil";

const Tab = createBottomTabNavigator();

function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused }) => {
            let iconName;

            if (route.name === "Home") {
              iconName = "home";
            } else if (route.name === "Catalogo") {
              iconName = "book-open";
            } else if (route.name === "Detalles") {
              iconName = "info";
            } else if (route.name === "Carrito") {
              iconName = "shopping-cart";
            } else if (route.name === "Perfil") {
              iconName = "user";
            }

            return (
              <View
                style={{
                  backgroundColor: focused ? "rgba(0,0,0,0.8)" : "transparent",
                  borderRadius: 40,
                  width: 50,  // Ancho fijo
                  height: 50, // Altura fija
                  alignItems: 'center',
                  justifyContent: 'center',
                }}
              >
                <Feather
                  name={iconName}
                  size={24}
                  color={focused ? "white" : "grey"}
                />
              </View>
            );
          },

          tabBarStyle: {
            height: 60,
            paddingTop: 10,
            paddingBottom: 10,
            backgroundColor: "white",
            borderTopWidth: 0,
            elevation: 0,
          },

          tabBarShowLabel: false,
        })}
      >
        <Tab.Screen
          name="Home"
          component={Home}
          options={{ headerShown: false }}
        />
        <Tab.Screen
          name="Catalogo"
          component={Catalogo}
          options={{ headerShown: false }}
        />
        <Tab.Screen
          name="Detalles"
          component={Detalles}
          options={{ headerShown: false }}
        />
        <Tab.Screen
          name="Carrito"
          component={Carrito}
          options={{ headerShown: false }}
        />
        <Tab.Screen
          name="Perfil"
          component={Perfil}
          options={{ headerShown: false }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

export default App;
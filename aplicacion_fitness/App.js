import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { PantallaBienvenida } from "./screens/Bienvenida";
import { PantallaPrincipal } from "./screens/Inicio1";
import { PantallaEstadisticas } from "./screens/Stats";
import Feather from "react-native-vector-icons/Feather";
import { View } from "react-native";

const tab = createBottomTabNavigator();
const Stack = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Bienvenida">
        <Stack.Screen
          name="Bienvenida"
          component={PantallaBienvenida}
          options={{ headerShown: false, tabBarStyle: { display: "none" } }}
        />
        <Stack.Screen
          name="Pantallas"
          component={Pantallas}
          options={{ headerShown: false, tabBarStyle: { display: "none" } }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

function Pantallas() {
  return (
    <tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused }) => {
          let iconName;

          if (route.name === "Inicio") {
            iconName = "home";
          }

          if (route.name === "Estadisticas") {
            iconName = "activity";
          }

          return (
            <View
              style={{
                backgroundColor: focused ? "black" : "transparent",
                borderRadius: 40,
                padding: 15,
                margin: 2,
              }}
            >
              <Feather
                name={iconName}
                size={30}
                color={focused ? "white" : "grey}"}
              />
            </View>
          );
        },

        tabBarStyle: {
          height: 80,
          paddingBottom: 10,
          backgroundColor: "white",
          borderTopWidth: 0,
          elevation: 0,
        },

        tabBarShowLabel: false,
      })}
    >
      <tab.Screen
        name="Inicio"
        component={PantallaPrincipal}
        options={{ headerShown: false }}
      />
      {
        <tab.Screen
          name="Estadisticas"
          component={PantallaEstadisticas}
          options={{ headerShown: false }}
        />
      }
    </tab.Navigator>
  );
}

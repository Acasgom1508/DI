import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { PantallaBienvenida } from "./screens/Bienvenida";
import { PantallaPrincipal } from "./screens/Inicio1";
import { PantallaEstadisticas } from "./screens/Stats";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";

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
          name="pantallas"
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
        tabBarIcon: ({ color }) => {
          let iconName;

          if (route.name === "Inicio") {
            iconName = "home";
            return <MaterialIcons name={iconName} size={40} color={color} />;
            FEATHER
          }

          if (route.name === "Estadisticas") {
            iconName = "insights";
            return <MaterialIcons name={iconName} size={40} color={color} />;
          }
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

import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { PantallaBienvenida } from "./screens/Bienvenida";
import { PantallaPrincipal } from "./screens/Inicio1";
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
          component={pantallas}
          options={{ headerShown: false, tabBarStyle: { display: "none" }}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}


function pantallas() {
  return (
    <tab.Navigator screenOptions={({route}) => ({
      tabBarIcon: ({ focused, color, size }) => {
              let iconName;
      
              if (route.name === "Inicio") {
                iconName = focused? "home" : "home-outline";
              } else {
                iconName = focused? "stats" : "stats-outline";
              }
      
              return <MaterialIcons name={iconName} size={size} color={color} />;
            },
    })}>
      <tab.Screen
        name="Inicio"
        component={PantallaPrincipal}
        options={{ headerShown: false }}
      />{/* 
      <tab.Screen
        name="Estadisticas"
        component={Stats}
        options={{ headerShown: false }}
      /> */}
    </tab.Navigator>
  );
}

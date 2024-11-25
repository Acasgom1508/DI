import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import InicioSesion from "./screens/inicioSesion";
import PrimeraPantalla from "./screens/primeraPantalla";

const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Inicio">
        <Stack.Screen name="Inicio" component={InicioSesion} />
        <Stack.Screen name="PrimeraPantalla" component={PrimeraPantalla} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
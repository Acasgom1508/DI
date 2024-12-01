import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Principal from "./screens/Principal";
import Hooks from "./screens/Hooks";

const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Principal">
        <Stack.Screen
          name="Principal"
          component={Principal}
          options={{ headerShown: false, tabBarStyle: { display: "none" } }}
        />
        <Stack.Screen
          name="Hooks"
          component={Hooks}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;

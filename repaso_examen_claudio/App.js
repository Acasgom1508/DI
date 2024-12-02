import React, { useState, useRef, useEffect } from "react";
import {
  View,
  Text,
  Button,
  Pressable,
  Animated,
  TextInput,
} from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

const Stack = createStackNavigator();

const HomeScreen = ({ navigation }) => {
  const [text, setText] = useState("");
  const [isFavorited, setIsFavorited] = useState(false);
  const [time, setTime] = useState(60);

  useEffect(() => {
    if (time > 0) {
      const timer = setTimeout(() => setTime(time - 1), 1000); // Restar 1 cada segundo
      return () => clearTimeout(timer); // Limpiar el temporizador
    }
  }, [time]);

  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        padding: 20,
      }}
    >
      <Button
        title={isFavorited ? "❤️ Remove from Favorites" : "🤍 Add to Favorites"}
        onPress={() => setIsFavorited(!isFavorited)}
        style={{marginBottom: 20}}
      />
      <Text style={{marginBottom: 20}}>Time Remaining: {time}s</Text>;
      <Text style={{ fontSize: 24, marginBottom: 20 }}>¡Bienvenido!</Text>
      <TextInput
        placeholder="Escribe algo"
        value={text}
        onChangeText={setText}
        style={{
          height: 40,
          borderColor: "gray",
          borderWidth: 1,
          marginBottom: 20,
          paddingHorizontal: 10,
          width: "100%",
        }}
      />
      <Pressable
        onPress={() => navigation.navigate("Animaciones", { inputText: text })}
        style={{
          backgroundColor: "#007BFF",
          padding: 15,
          borderRadius: 10,
        }}
      >
        <Text style={{ color: "white", fontSize: 18 }}>Ir a Animaciones</Text>
      </Pressable>
    </View>
  );
};

const AnimacionesScreen = ({ route }) => {
  const { inputText } = route.params;
  const fadeAnim = useRef(new Animated.Value(0)).current;

  const startAnimation = () => {
    Animated.timing(fadeAnim, {
      toValue: 1,
      duration: 2000,
      useNativeDriver: true,
    }).start();
  };

  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text style={{ fontSize: 20, marginBottom: 20 }}>
        Texto recibido: {inputText}
      </Text>
      <Animated.View
        style={{
          width: 100,
          height: 100,
          backgroundColor: "tomato",
          opacity: fadeAnim,
          marginBottom: 20,
        }}
      />
      <Button title="Iniciar Animación" onPress={startAnimation} />
    </View>
  );
};

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{ title: "Inicio" }}
        />
        <Stack.Screen
          name="Animaciones"
          component={AnimacionesScreen}
          options={{ title: "Animaciones" }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;

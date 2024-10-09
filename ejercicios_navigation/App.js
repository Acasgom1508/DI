import * as React from 'react';
import { Button, View, Text, StyleSheet, FlatList } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

function Principal({ navigation }) {
  return (
    <View style={styles.HomeScreen}>
      <Text style={styles.Encabezado}>Productos</Text>
      <FlatList style={styles.ListaProductos}>
        
      </FlatList>
    </View>
  );
}

function DetailsScreen() {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text style>Details Screen</Text>
    </View>
  );
}

const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={Principal} />
        <Stack.Screen name="Details" component={DetailsScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  HomeScreen: {
    backgroundColor: "#b3c0c5",
    alignItems: "center",
  },

  Encabezado: {
    fontSize: 30,
    fontWeight: 'bold',
    marginTop: 10,
    marginBottom: 10,
    color: '#30225a'
  },

  ListaProductos: {
    width: '100%',
    paddingHorizontal: 10,
    marginBottom: 20
  }

})

export default App;

import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View,Image, Button } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Image source={require("./assets/Presentacion/foto-pagina-bienvenida.png")} style={{width: 600, height: 590, marginRight: 100}}/>
      <Text style={{fontSize: 25, fontWeight: 'bold', paddingTop: 30}}>Track your Active Lifestyle</Text>
      <Text style={{paddingTop: 10, fontSize: 15}}>Find your way to the perfect body</Text>
      <Button title='Get Started'/>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
  },
});
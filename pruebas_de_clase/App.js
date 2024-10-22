import React from 'react';
import { View, StyleSheet } from 'react-native';
import UserInfo from './Components/UserInfo';

const App = () => {
  return (
    <View style={styles.container}>
      <UserInfo />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f5f5f5',
  },
});

export default App;

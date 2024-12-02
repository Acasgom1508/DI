import {
    View,
    Text,
    TouchableOpacity,
    StyleSheet,
    Image,
    Animated,
  } from "react-native";
  import React, { useRef, useEffect } from "react";
  
  export default function Home({ Navigation }) {
    return (
      <View>
        <Text>Home Screen</Text>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Ir a otra pantalla</Text>
        </TouchableOpacity>
      </View>
    );
  }
  
  const styles = StyleSheet.create({
      button: {
        backgroundColor: "blue",
        padding: 10,
        borderRadius: 5,
        marginTop: 20,
      },
      buttonText: {
        color: "white",
        fontSize: 18,
      },
  })
  
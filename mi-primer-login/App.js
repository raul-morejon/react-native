import { StatusBar } from "expo-status-bar";
import React from "react";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Dimensions,
  Image,
  ImageBackground,
  TouchableOpacity,
} from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import ButtonGradient from "./ButtonGradient";

export default function App() {
  return (
    <View style={styles.container}>
      <StatusBar style="light" />

      <ImageBackground
        source={require("./assets/topLog.png")}
        style={styles.background}
      >
        <Text style={styles.titulo}>Hello</Text>
        <Text style={styles.subTitle}>Sign in to your account</Text>
        <TextInput placeholder="john@email.com" style={styles.textInput} />
        <TextInput placeholder="password" style={styles.textInput} />
        <Text style={styles.text}>Forgot your password?</Text>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Sign in</Text>
        </TouchableOpacity>
        <Text style={styles.text}>Don't have an account?</Text>
      </ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f1f1f1",
    alignItems: "center",
    justifyContent: "center",
    position: "absolute", // Esto asegura que los elementos se ubiquen sobre la imagen
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    width: "100%",
    height: "100%",
  },
  titulo: {
    fontSize: 80,
    color: "#34434D",
    fontWeight: "bold",
  },
  subTitle: {
    fontSize: 20,
    color: "gray",
  },
  textInput: {
    padding: 10,
    paddingStart: 30,
    width: "80%",
    height: 50,
    marginTop: 20,
    borderRadius: 30,
    backgroundColor: "#fff",
  },
  background: {
    flex: 1, // Asegura que la imagen ocupe toda la pantalla
    justifyContent: "center", // Centra los elementos en el eje vertical
    alignItems: "center", // Centra los elementos en el eje horizontal
    width: "100%", // Para que la imagen de fondo ocupe todo el ancho
    height: "50%", // Para que la imagen ocupe todo el alto
  },
  button: {
    marginTop: 60,
    backgroundColor: "#007BFF", // Color de fondo del botón
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 50, // Bordes redondeados
    width: 140,
    height: 50,
    alignItems: "center",
    justifyContent: "center",
  },
  buttonText: {
    color: "white",
    fontSize: 18,
  },
  text: {
    marginTop: 20,
    fontSize: 15,
    color: "gray",
  },
});

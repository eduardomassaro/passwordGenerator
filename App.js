import { useState } from 'react';
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import Slider from '@react-native-community/slider';

let charset = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";

export default function App() {
  const [size, setsize] = useState(10);

  function generatePassword() {

    let password = "";

    for (let i = 0, n = charset.length; i < size; i++) {

      password += charset.charAt(Math.floor(Math.random() * n));

    }


  }

  return (
    <View style={styles.container}>
      <Image
        source={require("./src/assets/logo.png")}
        style={styles.logo}
      />

      <Text style={styles.title}>{size} caracteres</Text>
      <View style={styles.area}>
        <Slider
          style={{ height: 50 }}
          minimumValue={6}
          maximumValue={20}
          minimumTrackTintColor="#000"
          maximumTrackTintColor="#555"
          thumbTintColor="#392de9"
          value={size}
          onValueChange={(value) => setsize(value.toFixed(0))}
        />
      </View>

      <TouchableOpacity style={styles.button} onPress={generatePassword}>
        <Text style={styles.buttonText}>Gerar senha</Text>
      </TouchableOpacity>

    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F3F3FF',
    alignItems: 'center',
    justifyContent: 'center'
  },
  logo: {
    marginBottom: 60
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold'
  },
  area: {
    marginTop: 14,
    margimBottom: 14,
    width: "80%",
    backgroundColor: "#FFF",
    borderRadius: 8,
    padding: 8,
  },
  button: {
    backgroundColor: "#392de9",
    width: "80%",
    height: 50,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 8,
    marginBottom: 18
  },
  buttonText: {
    color: "#FFF",
    fontSize: 20,
    fontWeight: "bold"
  }
})
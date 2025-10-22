import { Text, StyleSheet, View, ImageBackground, Dimensions, Image } from 'react-native';
import React, { useState, useEffect } from 'react';

// Imagen de fondo (GIF animado)
const BackgroundImage = require('../assets/osakiii.gif');

// Nueva imagen que aparecerá en la pantalla principal
const LogoImage = require('../assets/mimi.jpg'); // 👉 cambia "logo.png" por el nombre de tu imagen

export default function ImageBackgroundScreen({ navigation }) {
  const [showSplash, setShowSplash] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowSplash(false);
    }, 6000);
    return () => clearTimeout(timer);
  }, []);

  // 🟢 Pantalla de bienvenida
  if (showSplash) {
    return (
      <ImageBackground
        source={BackgroundImage}
        style={styles.background}
        resizeMode="cover"
      >
        <View style={styles.overlay}>
          <Text style={styles.title}> Bienvenido a la Appi </Text>
          <Text style={styles.carga}> Cargando.... </Text>
        </View>
      </ImageBackground>
    );
  }

  // 🔵 Pantalla principal
  return (
    <ImageBackground
      source={BackgroundImage}
      style={styles.background}
      resizeMode="cover"
    >
      <View style={styles.mainScreen}>
        {/* Nueva imagen añadida en la pantalla principal */}
        <Image source={LogoImage} style={styles.logo} resizeMode="contain" />

        <Text style={styles.mainText}>Bienvenido a la pantalla principal.</Text>
      </View>
    </ImageBackground>
  );
}

// 📏 Obtener medidas de pantalla
const { width, height } = Dimensions.get('window');

// 🎨 Zona de estilos
const styles = StyleSheet.create({
  background: {
    width: width,
    height: height,
  },
  overlay: {
    flex: 1,
    backgroundColor: '#0000',
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    color: '#000000ff',
    fontSize: 32,
    fontWeight: 'bold',
    marginBottom: 10,
    textAlign: 'center',
  },
  carga: {
    color: '#333',
    fontSize: 18,
  },
  mainScreen: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#c1ffbbff',
  },
  mainText: {
    fontSize: 24,
    color: '#ff0095ff',
    marginTop: 20,
  },
  // ✨ Estilo para la nueva imagen
  logo: {
    width: 200,
    height: 200,
    borderRadius: 20,
  },
});

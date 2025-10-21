import React, { useState } from 'react'; 
import { View, Text, TextInput, Button, Alert, Platform , StyleSheet } from 'react-native';

export default function TextimputScreen () {
  const [nombre, setNombre] = useState('');

const mostrarAlerta = () => {
    if (nombre.trim() === '') {
      if (Platform.OS === 'web') {
        window.alert('Error: Por favor ingresa tu nombre');
      } else {
        Alert.alert('Error', 'Por favor ingresa tu nombre');
      }
    } else {
      if (Platform.OS === 'web') {
        window.alert(`¡Hola ${nombre}! Bienvenido `);
      } else {
        Alert.alert(`¡Hola ${nombre}! Bienvenido `);
      }
    }
  };
  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Practica TextInput & Alert</Text>

      <TextInput
        style={styles.nombres}
        placeholder="Escribe tu nombre"
        value={nombre}
        onChangeText={setNombre}
        maxLength={50}
      />

      <TextInput
      style={styles.nombres}
      placeholder='Ingresa tu contraseña'
      secureTextEntry={true}
      maxLength={20}
      />

      <TextInput
      style={[styles.nombres, { height: 100, textAlignVertical: 'top'}]}
      placeholder='Ingresa un comentario'
      multiline={4}
      maxLength={50}
      />
      
      <Button color='blue'  title="Mostrar saludo" onPress={mostrarAlerta} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'hsla(209, 73%, 88%, 1.00)',
    padding: 20, //separa el texto del recuadro
  },
  titulo: {
    fontSize: 22, //tamaño letra
    fontWeight: 'bold', //negritas
    marginBottom: 15, 
  },

  nombres: {
    borderWidth: 1, //Define el grosor del borde del componente
    borderColor: '#0f0e0eff', //Color del borde
    padding: 10,
    marginBottom: 20, //Separa este componente del que está debajo de él
  },
  
});
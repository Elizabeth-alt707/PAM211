
//1.zona importaciones
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button } from 'react-native';
import React, { useState } from 'react';


//2.zona de main o componentes
export default function ContadorScreen() {

   const[contador,setContador]= useState(0);

  return (
    
    <View style={styles.container}>

      <Text style={styles.texto1}>Contador: {contador} </Text>
      <Text style={styles.texto1}> {contador} </Text>

      <View style={styles.botonesCountainer}>
      <Button color='red' title='Agregar' onPress={()=>setContador(contador + 1)}/>
      <Button color='pink' title='Quitar' onPress={()=>setContador(contador - 1)}/>
      <Button color='blue' title='Reiniciar' onPress={()=>setContador(0)}/>
      <StatusBar style="auto" />

       </View>
    </View>
  );
}

//3. zona de los estilos
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#8a768aff',
    alignItems: 'center', //eje x
    justifyContent: 'center',  //eje y
  },

  texto1:{
    color: '#f7b1f7ff',
    fontSize:30,
    fontFamily:'Times New Roman',
    fontWeight:'bold',
    fontStyle:'italic',
    textDecorationLine:'line-through',
  },

  botonesCountainer:{
    marginTop:15, //margen 
    flexDirection:'row', //default
    gap:20,
  },


});
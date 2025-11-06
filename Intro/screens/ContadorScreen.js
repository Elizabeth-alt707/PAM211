//1.zona importaciones
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button } from 'react-native';
import React, { useState } from 'react';


//2.zona de main o componentes
export default function ContadorScreen() {

   const[contador,setContador]= useState(0);

  return (
    
    <View style={styles.container}>

     PS C:\PAM211> 
      <Text style={styles.texto1}>Contador: {contador} </Text>
      <Text style={styles.texto1}> Valor actual: {contador} </Text> 

   
      <View style={styles.botonesContainer}>
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
    flex:1,
    backgroundColor: '#8a768aff',
    alignItems: 'center', //eje x
    justifyContent: 'center',  //eje y
  },

  texto1:{
    color: '#f7b1f7ff', // Cambia el color del texto.
    fontSize:30,  // Tamaño de la fuente, medido en puntos.
    fontFamily: 'serif', // Tipo de letra
    fontWeight:'bold', // texto sea **negrita**.
    fontStyle:'italic',  // Aplica **cursiva** 
    textDecorationLine:'line-through', // Dibuja una línea que **tacha** el texto.
  },

  botonesContainer:{
    marginTop:15, //margen 
    flexDirection:'row', //Organiza los elementos
    gap:20, // Propiedad moderna de estilo para espaciado entre elementos
  },


});
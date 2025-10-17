import { Text, StyleSheet, View, Button } from 'react-native'
import React, { useState } from 'react'
import BotonesScreen from './BotonesScreen';
import ContadorScreen from './ContadorScreen';

export default function MenuScreen () {
  const [screen,setScreen]= useState('menu');

  switch (screen){
     case'contador':
     return <ContadorScreen/>;
      case'botones':
      return <BotonesScreen/>;
      case 'menu':
        default:
         return (
          <View>
             <Text>Menu de Practicas</Text>
             <Button onPress={()=>setScreen('contador')} title='Practica:Contador'></Button>
             <Button onPress={()=>setScreen('botones')} title='Practica:Botones'></Button>
         </View>
    )

  }
   
  
}

const styles = StyleSheet.create({})
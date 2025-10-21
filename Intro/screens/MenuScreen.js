import { Text, StyleSheet, View, Button } from 'react-native'
import React, { useState } from 'react'
import BotonesScreen from './BotonesScreen';
import ContadorScreen from './ContadorScreen';
import TextimputScreen from './TextimputScreen';


export default function MenuScreen () {
  const [screen,setScreen]= useState('menu');

  switch (screen){
     case'contador':
     return <ContadorScreen/>;
      case'botones':
      return <BotonesScreen/>;
      case'textimput':
      return <TextimputScreen/>;
      case 'menu':
        default:
         return (
          <View>
             <Text>Menu de Practicas</Text>
             <Button onPress={()=>setScreen('contador')} title='Practica:Contador'></Button>
             <Button onPress={()=>setScreen('botones')} title='Practica:Botones'></Button>
             <Button onPress={()=>setScreen('textimput')} title='Practica:TextImput'></Button>
         </View>
    )

  }
      
     
}

const styles = StyleSheet.create({})
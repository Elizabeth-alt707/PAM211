import { Text, StyleSheet, View, Button } from 'react-native'
import React, { useState } from 'react'
import BotonesScreen from './BotonesScreen';
import ContadorScreen from './ContadorScreen';
import TextimputScreen from './TextimputScreen';
import ImageBackgroundScreen from './ImageBackgroundScreen';
import ScrollViewScreen from './ScrollViewScreen';

export default function MenuScreen () {
  const [screen,setScreen]= useState('menu');

  switch (screen){
     case'contador':
     return <ContadorScreen/>;
      case'botones':
      return <BotonesScreen/>;
      case'textimput':
      return <TextimputScreen/>;
      case'imagebackground':
      return <ImageBackgroundScreen/>;
      case'scrollview':
      return <ScrollViewScreen/>;
      case 'menu':
        default:
         return (
          <View>
             <Text>Menu de Practicas</Text>
             <Button onPress={()=>setScreen('contador')} title='Practica:Contador'></Button>
             <Button onPress={()=>setScreen('botones')} title='Practica:Botones'></Button>
             <Button onPress={()=>setScreen('textimput')} title='Practica:TextImput'></Button>
             <Button onPress={()=>setScreen('imagebackground')} title='Practica:ImageBackground'></Button>
             <Button onPress={()=>setScreen('scrollview')} title='Practica:ScrollView'></Button>

         </View>
    )

  }
      
     
}

const styles = StyleSheet.create({})
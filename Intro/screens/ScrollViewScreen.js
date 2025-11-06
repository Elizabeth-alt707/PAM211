import { Text, StyleSheet, View, ScrollView } from 'react-native'
import React, { Component } from 'react'

export default function ScrollViewScreen () {

    return (
      <View style = {styles.container}>
        <ScrollView style={styles.scrollArea}
        contentContainerStyle={styles.scrollContent} 
        showsVerticalScrollIndicator={true}>
        <Text>ScrollViewScreen</Text>
        <Text>ScrollViewScreen</Text>
        <Text>ScrollViewScreen</Text>
        <Text>ScrollViewScreen</Text>
        <Text>ScrollViewScreen</Text>
        <Text>ScrollViewScreen</Text>
        <Text>ScrollViewScreen</Text>
        <Text>ScrollViewScreen</Text>
        <Text>ScrollViewScreen</Text>
        <Text>ScrollViewScreen</Text>
        <Text>ScrollViewScreen</Text>
        <Text>ScrollViewScreen</Text>
        </ScrollView>
      </View>
    )
  
}

const styles = StyleSheet.create({
    container: {
        flex:1,
        backgroundColor: '#ffffff',
    },
    scrollArea: {
        flex: 1,
    },
    scrollContent: {
        alignItems: 'center',
        paddingVertical: 20,
    },
    item: {
        backgroundColor: '#c9a0ff',
        color: '#FFF',
        padding: 12,
        marginVertical: 8,
        borderRadius: 10,
        textAlign: 'center',
    },
});


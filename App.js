import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TextInput, Button, Pressabl } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import * as SQLite from 'expo-sqlite';
import {useState, useEffect } from 'react';
import HomeScreen from './screens/HomeScreen';
import ExercisesScreen from './screens/ExercisesScreen';
import EquipmentScreen from './screens/EquipmentScreen';

const Stack =  createNativeStackNavigator();

export default function App() {

  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name='Home'
          component={HomeScreen}
        />
        <Stack.Screen
          name='Equipment'
          component={EquipmentScreen}
        />
        <Stack.Screen
          name='Exercises'
          component={ExercisesScreen}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
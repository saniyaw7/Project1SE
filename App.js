
import 'react-native-gesture-handler';

import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import LoginScreen from './components/LoginScreen';
import RegisterScreen from './components/RegisterScreen';
import HomeScreen from './components/HomeScreen';
import ExerciseSelection from './components/ExerciseSelection';
import ScheduleExercise from './components/ScheduleExercise';
import IngredientSearch from './components/IngredientSearch';
import IngredientDetail from './components/IngredientDetail';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login">
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="Register" component={RegisterScreen} />
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="ExerciseSelection" component={ExerciseSelection} />
        <Stack.Screen name="ScheduleExercise" component={ScheduleExercise} />
        <Stack.Screen name="IngredientSearch" component={IngredientSearch} />
        <Stack.Screen name="IngredientDetail" component={IngredientDetail} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}



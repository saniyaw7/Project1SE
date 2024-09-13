import 'react-native-gesture-handler';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import LoginScreen from './components/LoginScreen';
import RegisterScreen from './components/RegisterScreen';
import ScheduleExercise from './components/ScheduleExercise';
import ExerciseSelection from './components/ExerciseSelection';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login">
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="Register" component={RegisterScreen} />
        <Stack.Screen name="ExerciseSelection" component={ExerciseSelection} />
        <Stack.Screen name="ScheduleExercise" component={ScheduleExercise} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}


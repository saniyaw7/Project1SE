import { StatusBar } from 'expo-status-bar';
import { StyleSheet} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import TestHomeScreen from './components/TestHomeScreen';
import ExercisesScreen from './components/ExercisesScreen';
import EquipmentScreen from './components/EquipmentScreen';

const Stack =  createNativeStackNavigator();

export default function App() {

  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name='TestHome'
          component={TestHomeScreen}
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
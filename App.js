import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View } from 'react-native';
import React from 'react';
import WelcomeMessage from './components/WelcomeMessage'; // Import WelcomeMessage component
import Logo from './components/Logo'; // Import Logo component
import LoginScreen from './components/LoginScreen'; // Import LoginScreen component

export default function App() {
  return (
    <View style={styles.container}>
      {/* Welcome Message */}
      <WelcomeMessage />

      {/* Circular FitLife Hub Logo */}
      <Logo />

      {/* Login Section */}
      <LoginScreen />

      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f7f7f7',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
});
// components/WelcomeMessage.js
import React from 'react';
import { Text, StyleSheet } from 'react-native';

const WelcomeMessage = () => {
  return <Text style={styles.message}>Welcome to FitLife Hub!</Text>;
};

const styles = StyleSheet.create({
  message: {
    fontSize: 24,
    color: '#27ae60',
    marginBottom: 20,
    marginTop: 40,
    fontWeight: '600',
    textAlign: 'center',
    textShadowColor: 'rgba(0, 0, 0, 0.1)',
    textShadowOffset: { width: 0, height: 1 },
    textShadowRadius: 1,
    letterSpacing: 0.5,
  },
});

export default WelcomeMessage;
// components/WelcomeMessage.js
import React from 'react';
import { Text, StyleSheet } from 'react-native';

const WelcomeMessage = () => {
  return <Text style={styles.message}>Welcome to FitLife Hub!</Text>;
};

const styles = StyleSheet.create({
  message: {
    fontSize: 24, // Slightly smaller font size for sleekness
    color: '#27ae60',
    marginBottom: 20,
    marginTop: 40, // Add marginTop to bring the logo down
    fontWeight: '600', // Use a lighter font weight
    textAlign: 'center', // Center the text
    textShadowColor: 'rgba(0, 0, 0, 0.1)', // Subtle shadow color
    textShadowOffset: { width: 0, height: 1 }, // Define the shadow offset
    textShadowRadius: 1, // Define the shadow radius
    letterSpacing: 0.5, // Refined letter spacing
  },
});

export default WelcomeMessage;
// components/Logo.js
import React from 'react';
import { Image, StyleSheet } from 'react-native';

const Logo = () => {
  return <Image source={require('../assets/fitlifehub_logo.png')} style={styles.logo} />;
};

const styles = StyleSheet.create({
  logo: {
    width: 150,
    height: 150,
    borderRadius: 75,
    marginBottom: 40,
     marginTop: 40, // Add marginTop to bring the logo down
    borderWidth: 3,
    borderColor: '#27ae60',
  },
});

export default Logo;
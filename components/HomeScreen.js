import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { auth } from '../firebaseConfig'; // Import Firebase auth for getting user info

const HomeScreen = ({ navigation }) => {
  const [userEmail, setUserEmail] = useState('');

  // Use useEffect to get the current user email once when the component mounts
  useEffect(() => {
    const currentUser = auth.currentUser;
    if (currentUser) {
      setUserEmail(currentUser.email);
    }
  }, []); // Empty dependency array to run only once when the component mounts

  return (
    <View style={styles.container}>
      <Text style={styles.welcomeText}>Welcome, {userEmail}!</Text>

      {/* Button to go to Exercise Selection */}
      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate('ExerciseSelection')}
      >
        <Text style={styles.buttonText}>Go to Exercise Selection</Text>
      </TouchableOpacity>

      {/* Button to go to Ingredient Search */}
      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate('IngredientSearch')} // Add this for future use
      >
        <Text style={styles.buttonText}>Go to Ingredient Search</Text>
      </TouchableOpacity>

      {/* Button to go to Equipment Search */}
      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate('EquipmentScreen')} // Add this for future use
      >
        <Text style={styles.buttonText}>Search by Equipment</Text>
      </TouchableOpacity>

      {/* Button to go to Muscle Search */}
      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate('MuscleScreen')} // Add this for future use
      >
        <Text style={styles.buttonText}>Search by Muscle</Text>
      </TouchableOpacity>







    </View>



  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f0f0f0',
    padding: 20,
  },
  welcomeText: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 40,
    color: '#27ae60',
  },
  button: {
    backgroundColor: '#2980B9',
    paddingVertical: 15,
    paddingHorizontal: 30,
    borderRadius: 10,
    marginBottom: 20,
    alignItems: 'center',
    width: '80%',
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default HomeScreen;

import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';
import { auth } from '../firebaseConfig';
import { FontAwesome5, MaterialIcons, Ionicons } from '@expo/vector-icons';

const HomeScreen = ({ navigation }) => {
  const [userEmail, setUserEmail] = useState('');

  useEffect(() => {
    const currentUser = auth.currentUser;
    if (currentUser) {
      setUserEmail(currentUser.email);
    }
  }, []);

  return (
    <View style={styles.container}>
      {/* Welcome Section */}
      <View style={styles.welcomeContainer}>
        <Text style={styles.welcomeText}>Welcome back,</Text>
        <Text style={styles.emailText}>{userEmail}</Text>
      </View>

      {/* Workout Options Section */}
      <View style={styles.sectionContainer}>
        <Text style={styles.sectionTitle}>Workout Options</Text>

        <TouchableOpacity
          style={styles.optionButton}
          onPress={() => navigation.navigate('ExerciseSelection')}
        >
          <FontAwesome5 name="dumbbell" size={24} color="#fff" style={styles.icon} />
          <Text style={styles.buttonText}>Exercise Selection</Text>
        </TouchableOpacity>

      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate('MuscleScreen')}
      >
        <Ionicons name="chatbox-ellipses" size={24} color="#fff" style={styles.icon} />
          <Text style={styles.buttonText}>Search by Muscle</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.optionButton}
          onPress={() => navigation.navigate('IngredientSearch')}
        >
          <MaterialIcons name="food-bank" size={24} color="#fff" style={styles.icon} />
          <Text style={styles.buttonText}>Ingredient Search</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.optionButton}
          onPress={() => navigation.navigate('EquipmentScreen')}
        >
          <Ionicons name="barbell" size={24} color="#fff" style={styles.icon} />
          <Text style={styles.buttonText}>Search by Equipment</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.optionButton}
          onPress={() => navigation.navigate('ViewAllComments')}
        >
          <Ionicons name="chatbox-ellipses" size={24} color="#fff" style={styles.icon} />
          <Text style={styles.buttonText}>View All Comments</Text>
        </TouchableOpacity>
      </View>

      {/* Appointments Section */}
      <View style={styles.sectionContainer}>
        <Text style={styles.sectionTitle}>Your Appointments</Text>
        <TouchableOpacity
          style={styles.appointmentButton}
          onPress={() => navigation.navigate('ViewExerciseAppointments')}
        >
          <Ionicons name="calendar" size={24} color="#fff" style={styles.icon} />
          <Text style={styles.buttonText}>View Exercise Appointments</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f0f0f0',
    padding: 20,
    justifyContent: 'center',
  },
  welcomeContainer: {
    alignItems: 'center',
    marginBottom: 30,
  },
  welcomeText: {
    fontSize: 28,
    fontWeight: '600',
    color: '#333',
  },
  emailText: {
    fontSize: 20,
    color: '#27ae60',
  },
  sectionContainer: {
    marginVertical: 20,
  },
  sectionTitle: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 15,
  },
  optionButton: {
    flexDirection: 'row',
    backgroundColor: '#2980B9',
    paddingVertical: 15,
    paddingHorizontal: 20,
    borderRadius: 10,
    alignItems: 'center',
    marginBottom: 15,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 5,
  },
  appointmentButton: {
    flexDirection: 'row',
    backgroundColor: '#27ae60',
    paddingVertical: 15,
    paddingHorizontal: 20,
    borderRadius: 10,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 5,
  },
  icon: {
    marginRight: 10,
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default HomeScreen;

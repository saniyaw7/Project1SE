// ViewExerciseAppointments.js
import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, FlatList, Alert } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

const ViewExerciseAppointments = () => {
  const [appointments, setAppointments] = useState([]);

  // Function to retrieve exercise data from AsyncStorage
  const loadExerciseData = async () => {
    try {
      const storedData = await AsyncStorage.getItem('@exercise_data');
      if (storedData) {
        setAppointments(JSON.parse(storedData));
      } else {
        Alert.alert('No appointments found');
      }
    } catch (error) {
      console.error('Error loading exercise data:', error);
    }
  };

  // Fetch appointments on component mount
  useEffect(() => {
    loadExerciseData();
  }, []);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Your Exercise Appointments</Text>

      <FlatList
        data={appointments}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item }) => (
          <View style={styles.appointmentContainer}>
            <Text style={styles.exerciseText}>Exercise: {item.exercise}</Text>
            <Text style={styles.dateText}>Date: {item.date}</Text>
            <Text style={styles.timeText}>Time: {item.time}</Text>
          </View>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 20,
    backgroundColor: '#f7f7f7',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    color: '#27ae60',
    marginBottom: 20,
  },
  appointmentContainer: {
    backgroundColor: '#e0e0e0',
    padding: 15,
    borderRadius: 8,
    marginBottom: 10,
  },
  exerciseText: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  dateText: {
    fontSize: 16,
  },
  timeText: {
    fontSize: 16,
  },
});

export default ViewExerciseAppointments;

import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Alert } from 'react-native';
import DateTimePicker from '@react-native-community/datetimepicker';
import AsyncStorage from '@react-native-async-storage/async-storage';

const ScheduleExercise = ({ route, navigation }) => {
  const { exercise } = route.params;
  const [date, setDate] = useState(new Date());
  const [time, setTime] = useState(new Date());
  const [showDatePicker, setShowDatePicker] = useState(false);
  const [showTimePicker, setShowTimePicker] = useState(false);

  // Function to save exercise data to AsyncStorage
  const saveExerciseData = async (exercise, date, time) => {
    try {
      const exerciseData = {
        exercise: exercise.name,
        date: date.toDateString(),
        time: time.toLocaleTimeString(),
      };

      // Retrieve existing data
      const existingData = await AsyncStorage.getItem('@exercise_data');
      const parsedData = existingData ? JSON.parse(existingData) : [];

      // Add new exercise data
      parsedData.push(exerciseData);

      // Save the updated list
      await AsyncStorage.setItem('@exercise_data', JSON.stringify(parsedData));
      console.log('Exercise data saved successfully');
    } catch (error) {
      console.error('Error saving exercise data:', error);
    }
  };

  const handleDateChange = (event, selectedDate) => {
    const currentDate = selectedDate || date;
    setShowDatePicker(false);
    setDate(currentDate);
  };

  const handleTimeChange = (event, selectedTime) => {
    const currentTime = selectedTime || time;
    setShowTimePicker(false);
    setTime(currentTime);
  };

  const handleSchedule = () => {
    saveExerciseData(exercise, date, time);
    Alert.alert(
      'Success',
      `Exercise scheduled for ${exercise.name} on ${date.toDateString()} at ${time.toLocaleTimeString()}`,
    );
    navigation.goBack();
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Schedule {exercise.name}</Text>

      <TouchableOpacity onPress={() => setShowDatePicker(true)} style={styles.dateButton}>
        <Text style={styles.dateButtonText}>
          {date ? date.toDateString() : 'Select a date'}
        </Text>
      </TouchableOpacity>

      {showDatePicker && (
        <DateTimePicker
          value={date}
          mode="date"
          display="default"
          onChange={handleDateChange}
        />
      )}

      <TouchableOpacity onPress={() => setShowTimePicker(true)} style={styles.timeButton}>
        <Text style={styles.timeButtonText}>
          {time ? time.toLocaleTimeString() : 'Select a time'}
        </Text>
      </TouchableOpacity>

      {showTimePicker && (
        <DateTimePicker
          value={time}
          mode="time"
          display="default"
          onChange={handleTimeChange}
        />
      )}

      <TouchableOpacity style={styles.button} onPress={handleSchedule}>
        <Text style={styles.buttonText}>Schedule Exercise</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 20,
    backgroundColor: '#f0f0f0',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    color: '#27ae60',
    marginBottom: 20,
  },
  dateButton: {
    backgroundColor: '#fff',
    borderColor: 'gray',
    borderWidth: 1,
    borderRadius: 8,
    padding: 15,
    marginBottom: 20,
  },
  dateButtonText: {
    fontSize: 16,
    color: '#333',
  },
  timeButton: {
    backgroundColor: '#fff',
    borderColor: 'gray',
    borderWidth: 1,
    borderRadius: 8,
    padding: 15,
    marginBottom: 20,
  },
  timeButtonText: {
    fontSize: 16,
    color: '#333',
  },
  button: {
    backgroundColor: '#27ae60',
    paddingVertical: 15,
    borderRadius: 10,
    alignItems: 'center',
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default ScheduleExercise;


import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, FlatList, Alert } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import DateTimePicker from '@react-native-community/datetimepicker';

const ViewExerciseAppointments = () => {
  const [appointments, setAppointments] = useState([]);
  const [editIndex, setEditIndex] = useState(null); // To track which exercise is being edited
  const [editDate, setEditDate] = useState(new Date());
  const [editTime, setEditTime] = useState(new Date());
  const [showDatePicker, setShowDatePicker] = useState(false);
  const [showTimePicker, setShowTimePicker] = useState(false);

  // Fetch saved exercises from AsyncStorage
  const fetchAppointments = async () => {
    try {
      const jsonValue = await AsyncStorage.getItem('@exercise_data');
      if (jsonValue !== null) {
        setAppointments(JSON.parse(jsonValue));
      }
    } catch (error) {
      console.error('Error fetching appointments:', error);
    }
  };

  // Load appointments when the component mounts
  useEffect(() => {
    fetchAppointments();
  }, []);

  // Delete an exercise from the list
  const handleDelete = async (index) => {
    const updatedAppointments = [...appointments];
    updatedAppointments.splice(index, 1);
    setAppointments(updatedAppointments);
    await AsyncStorage.setItem('@exercise_data', JSON.stringify(updatedAppointments));
    Alert.alert('Success', 'Exercise deleted successfully.');
  };

  // Open the date picker for editing
  const handleEdit = (index) => {
    setEditIndex(index);
    setEditDate(new Date(appointments[index].date)); // Ensure date is passed correctly
    // Parse the time string correctly before passing it to Date object
    const timeParts = appointments[index].time.split(':');
    const hours = parseInt(timeParts[0]);
    const minutes = parseInt(timeParts[1].split(' ')[0]);
    const isPM = timeParts[1].includes('PM');
    let parsedHours = hours;
    if (isPM && hours < 12) parsedHours = hours + 12;
    if (!isPM && hours === 12) parsedHours = 0;

    const currentTime = new Date();
    currentTime.setHours(parsedHours);
    currentTime.setMinutes(minutes);
    setEditTime(currentTime); // Pass time in correct format
    setShowDatePicker(true); // Start by opening the date picker
  };

  // Handle the date change
  const handleDateChange = (event, selectedDate) => {
    if (selectedDate !== undefined) {
      setEditDate(selectedDate);
    }
    setShowDatePicker(false); // Close date picker after selection
    setShowTimePicker(true); // Open time picker after date selection
  };

  // Handle the time change
  const handleTimeChange = (event, selectedTime) => {
    if (selectedTime !== undefined) {
      setEditTime(selectedTime);
    }
    setShowTimePicker(false); // Close time picker after selection
    updateAppointment(); // Update the appointment after both date and time are selected
  };

  // Update the selected exercise appointment
  const updateAppointment = async () => {
    if (editIndex !== null) {
      const updatedAppointments = [...appointments];
      updatedAppointments[editIndex].date = editDate.toDateString(); // Update date
      updatedAppointments[editIndex].time = editTime.toLocaleTimeString(); // Update time
      setAppointments(updatedAppointments);
      await AsyncStorage.setItem('@exercise_data', JSON.stringify(updatedAppointments));
      Alert.alert('Success', 'Exercise appointment updated successfully.');
      setEditIndex(null); // Reset the editing index
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Your Appointments</Text>

      {appointments.length === 0 ? (
        <Text style={styles.noAppointmentsText}>No appointments found. Please schedule an exercise.</Text>
      ) : (
        <FlatList
          data={appointments}
          keyExtractor={(item, index) => index.toString()}
          renderItem={({ item, index }) => (
            <View style={styles.appointmentItem}>
              <Text>{item.exercise} - {item.date} at {item.time}</Text>
              <TouchableOpacity style={styles.editButton} onPress={() => handleEdit(index)}>
                <Text style={styles.buttonText}>Edit</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.deleteButton} onPress={() => handleDelete(index)}>
                <Text style={styles.buttonText}>Delete</Text>
              </TouchableOpacity>
            </View>
          )}
        />
      )}

      {/* DateTime Pickers for Editing */}
      {showDatePicker && (
        <DateTimePicker
          value={editDate}
          mode="date"
          display="default"
          onChange={handleDateChange}
        />
      )}

      {showTimePicker && (
        <DateTimePicker
          value={editTime}
          mode="time"
          display="default"
          onChange={handleTimeChange}
        />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  noAppointmentsText: {
    fontSize: 18,
    textAlign: 'center',
    color: '#888',
    marginTop: 20,
  },
  appointmentItem: {
    padding: 10,
    marginVertical: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
  editButton: {
    backgroundColor: '#f0ad4e',
    padding: 10,
    borderRadius: 5,
    marginTop: 10,
  },
  deleteButton: {
    backgroundColor: '#d9534f',
    padding: 10,
    borderRadius: 5,
    marginTop: 10,
  },
  buttonText: {
    color: '#fff',
    textAlign: 'center',
  },
});

export default ViewExerciseAppointments;

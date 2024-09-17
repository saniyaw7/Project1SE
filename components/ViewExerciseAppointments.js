import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, FlatList, Alert } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import DateTimePicker from '@react-native-community/datetimepicker'; // Import DateTimePicker for editing

const ViewExerciseAppointments = () => {
  const [appointments, setAppointments] = useState([]);
  const [editIndex, setEditIndex] = useState(null); // To track which exercise is being edited
  const [editDate, setEditDate] = useState(new Date());
  const [editTime, setEditTime] = useState(new Date());
  const [showDatePicker, setShowDatePicker] = useState(false);
  const [showTimePicker, setShowTimePicker] = useState(false);

  // Function to fetch saved exercises from AsyncStorage
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

  // Function to delete an exercise from the list
  const handleDelete = async (index) => {
    const updatedAppointments = [...appointments];
    updatedAppointments.splice(index, 1);
    setAppointments(updatedAppointments);
    await AsyncStorage.setItem('@exercise_data', JSON.stringify(updatedAppointments));
    Alert.alert('Success', 'Exercise deleted successfully.');
  };

  // Function to open the date picker for editing
  const handleEdit = (index) => {
    setEditIndex(index);
    setShowDatePicker(true); // Start by opening the date picker
  };

  // Function to handle the date change
  const handleDateChange = (event, selectedDate) => {
    const currentDate = selectedDate || editDate;
    setShowDatePicker(false);
    setEditDate(currentDate);
    setShowTimePicker(true); // Open the time picker after selecting the date
  };

  // Function to handle the time change
  const handleTimeChange = (event, selectedTime) => {
    const currentTime = selectedTime || editTime;
    setShowTimePicker(false);
    setEditTime(currentTime);
    updateAppointment();
  };

  // Function to update the selected exercise appointment
  const updateAppointment = async () => {
    if (editIndex !== null) {
      const updatedAppointments = [...appointments];
      updatedAppointments[editIndex].date = editDate.toDateString();
      updatedAppointments[editIndex].time = editTime.toLocaleTimeString();
      setAppointments(updatedAppointments);
      await AsyncStorage.setItem('@exercise_data', JSON.stringify(updatedAppointments));
      Alert.alert('Success', 'Exercise appointment updated successfully.');
      setEditIndex(null); // Reset the editing index
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Your Appointments</Text>
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

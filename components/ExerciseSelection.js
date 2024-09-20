import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import RNPickerSelect from 'react-native-picker-select';

const ExerciseSelection = ({ navigation }) => {
  const [exercises, setExercises] = useState([]);
  const [selectedExercise, setSelectedExercise] = useState(null);

  // Fetch exercises from WGER API
  useEffect(() => {
    fetch('https://wger.de/api/v2/exercise/')
      .then((response) => response.json())
      .then((data) => setExercises(data.results.map(item => ({ label: item.name, value: item }))))
      .catch((error) => console.error('Error fetching exercises:', error));
  }, []);

  const handleSelectExercise = () => {
    if (selectedExercise) {
      navigation.navigate('ScheduleExercise', { exercise: selectedExercise });
    } else {
      alert('Please select an exercise.');
    }
  };

  const handleViewComments = () => {
    if (selectedExercise) {
      navigation.navigate('ExerciseCommentScreen', { exercise: selectedExercise });
    } else {
      alert('Please select an exercise to view comments.');
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Select an Exercise</Text>
      <RNPickerSelect
        onValueChange={(value) => setSelectedExercise(value)}
        items={exercises}
        placeholder={{ label: "Choose an exercise", value: null }}
        style={pickerSelectStyles}
      />

      {/* Button to navigate to Schedule Exercise */}
      <TouchableOpacity style={styles.button} onPress={handleSelectExercise}>
        <Text style={styles.buttonText}>Next</Text>
      </TouchableOpacity>

      {/* Button to navigate to Exercise Comments */}
      <TouchableOpacity style={styles.commentButton} onPress={handleViewComments}>
        <Text style={styles.buttonText}>View/Add Comments</Text>
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
    marginBottom: 20,
    textAlign: 'center',
    color: '#333',
  },
  button: {
    marginTop: 20,
    backgroundColor: '#27ae60',
    paddingVertical: 15,
    paddingHorizontal: 30,
    borderRadius: 10,
    alignItems: 'center',
  },
  commentButton: {
    marginTop: 20,
    backgroundColor: '#2980B9',
    paddingVertical: 15,
    paddingHorizontal: 30,
    borderRadius: 10,
    alignItems: 'center',
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
});

const pickerSelectStyles = {
  inputIOS: {
    fontSize: 16,
    paddingVertical: 12,
    paddingHorizontal: 10,
    borderWidth: 1,
    borderColor: 'gray',
    borderRadius: 8,
    color: 'black',
    paddingRight: 30,
    backgroundColor: '#fff',
  },
  inputAndroid: {
    fontSize: 16,
    paddingHorizontal: 10,
    paddingVertical: 8,
    borderWidth: 1,
    borderColor: 'gray',
    borderRadius: 8,
    color: 'black',
    paddingRight: 30,
    backgroundColor: '#fff',
  },
};

export default ExerciseSelection;


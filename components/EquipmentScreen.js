/*
This page displays the exercise equipment in a dropdown menu a user can select and filter exercises by
*/
import React, { useState } from 'react';
import { Dropdown } from 'react-native-element-dropdown';
import { Button, StyleSheet, Text, View } from 'react-native';
import useFetchData from './RestApi';

const EquipmentScreen = ({navigation}) => {
  const {data} = useFetchData('equipment','');
  const [value, setValue] = useState(null);

  const handleSelect = (item) => {
      setValue(item.id);
    };

  const handleNavigate = () => {
      if (value) {
        navigation.navigate('ExercisesScreen', { itemId: value });
      } else {
        console.log('No item selected');
      }
    };
  
  return(
    <View style={styles.container}>
      <View style={styles.dropdownContainer}>
        <Text>
          Filter Exercises By Equipment:
        </Text>
        <Dropdown
          style={styles.dropdown}
          searchPlaceholder="Pick Equipment"
          data={data}
          labelField="name"
          valueField="id"
          placeholder="Select Equipment"
          value={value}
          onChange={handleSelect}
        />
        <Button title='Filter Exercises' onPress={handleNavigate}/>
      </View>
    </View>
  );
}

export default EquipmentScreen

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  dropdownContainer: {
      width: '80%',
      marginTop: 30,
      marginBottom: 20,
    },
    dropdown: {
      height: 50,
      borderColor: 'gray',
      borderWidth: 1,
      borderRadius: 5,
      paddingHorizontal: 8,
      backgroundColor: '#f0f0f0',
    },
});
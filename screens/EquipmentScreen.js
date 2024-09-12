import React, {useEffect, useState} from 'react';
import { Dropdown } from 'react-native-element-dropdown';
import { ActivityIndicator, FlatList, Button, StyleSheet, Text, View } from 'react-native'

const EquipmentScreen = ({navigation}) => {
  const [isLoading, setLoading] = useState(true);
  const [data, setData] = useState([]);
  const [value, setValue] = useState(null);
  const API_KEY = '966ac55de3c816f715d15d864b887dcebf0f2626';

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
  try {
    const response = await fetch('https:/wger.de/api/v2/equipment/',{
      headers:{
        'Authorization':`Token ${API_KEY}`
      } 
    });

    const result = await response.json();
    setData(result.results);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  const handleSelect = (item) => {
      setValue(item.id);
    };

  const handleNavigate = () => {
      if (value) {
        navigation.navigate('Exercises', { itemId: value });
      } else {
        console.log('No item selected');
      }
    };
  
  return(
    <View style={styles.container}>
      <View style={styles.dropdownContainer}>
        <Text>
          Filter Exercises By:
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
      width: '80%', // Adjust the width as needed
      marginTop: 30,
      marginBottom: 20, // Add some margin for spacing
    },
    dropdown: {
      height: 50,
      borderColor: 'gray',
      borderWidth: 1,
      borderRadius: 5,
      paddingHorizontal: 8,
      backgroundColor: '#f0f0f0', // Add background color for better visibility
    },
});
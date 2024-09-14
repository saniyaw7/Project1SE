
// import * as React from 'react';
// import { NavigationContainer } from '@react-navigation/native';
// import { createNativeStackNavigator } from '@react-navigation/native-stack';
// import { StyleSheet, Text, View, Button, Pressable } from 'react-native';
import React, {useEffect, useState} from 'react';
import {ActivityIndicator, FlatList, Text, View} from 'react-native';
import { Dropdown } from 'react-native-element-dropdown';
import { StyleSheet } from 'react-native';
import AntDesign from '@expo/vector-icons/AntDesign';
const Home = () => {
  const [isLoading, setLoading] = useState(true);
  const [data, setData] = useState([]);
  const [value, setValue] = useState(null);

  const getMuscles = async () => {
    try {
      const response = await fetch('https://wger.de/api/v2/daysofweek');
      const json = await response.json();
      setData(json.results);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getMuscles();
  }, []);

  return (
    <View style={{flex: 1, padding: 24}}>


      {/* {isLoading ? (
        <ActivityIndicator />
      ) : (
        <FlatList
          data={data}
          keyExtractor={({id}) => id}
          renderItem={({item}) => (
            <Text>
              {item.name}, {item.name_en}
            </Text>
          )}
        />
      )} */}
      <Dropdown style={[styles.dropdown]}
        searchPlaceholder="Pick a Muscle"
        data={data}
        labelField="day_of_week"
        value={value}
        onChange={item => {setValue(item)}}/>
        


      
    </View>
  );
};

// export default function Home(){
//     return(
// <View>
//     <Text> Hello</Text>
// </View>
//     );
// }
export default Home;

const styles = StyleSheet.create({
  dropdown: {
    height: 50,
    borderColor: 'gray',
    borderWidth: 0.5,
    borderRadius: 8,
    paddingHorizontal: 8,
  }
});
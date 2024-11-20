import React, {useEffect, useState} from 'react';
import {ActivityIndicator, FlatList, Text, View, Image, Button} from 'react-native';
import { Dropdown } from 'react-native-element-dropdown';
import { StyleSheet } from 'react-native';
import AntDesign from '@expo/vector-icons/AntDesign';
const MuscleScreen = ({navigation}) => {
  const [isLoading, setLoading] = useState(true);
  const [data, setData] = useState([]);
  const [value, setValue] = useState(null);
  const [valFromDrop,setValFromDrop ] = useState(null);

  const getMuscles = async () => {
    try {
      const response = await fetch('https://wger.de/api/v2/muscle/');
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

      <Dropdown style={[styles.dropdown]}
        placeholder="Pick a Muscle"
        data={data}
        labelField="name"
        valueField="id"
        value={value}
        onChange={item => setValue(item.id)}/>
      <View style={[styles.button]} >
      <Button  title="search" onPress={() => navigation.navigate('MuscleInfo', {muscleId: value })}/>
      </View>
    {/* <Text> {value.name_en}</Text> */}
    {/* <Image source={{uri:'https://wger.de/static/images/muscles/secondary/muscle-${value.id}.svg'}}></Image> */}
  
    </View>

  );
};


export default MuscleScreen;

const styles = StyleSheet.create({
  dropdown: {
    height: 50,
    borderColor: 'gray',
    borderWidth: 1.5,
    borderRadius: 8,
    paddingHorizontal: 15,
    marginBottom:20,
  },
  button:{
    // alignItems: 'center',
    backgroundColor:'grey',
  
  }
});
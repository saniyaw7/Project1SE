import React, {useEffect, useState} from 'react';
import {ActivityIndicator, FlatList, Text, View, Image, Button} from 'react-native';

import { StyleSheet } from 'react-native';


const MuscleInfo = ({ route }) => {
    const [isLoading, setLoading] = useState(true);
    const {muscleId} = route.params;
    const [info, setInfo] = useState([]);
    const getInfo = async () => {
        try {
          const response = await fetch(`https://wger.de/api/v2/exercise/?muscles=${muscleId}&language=2`);
          const json = await response.json();
         
          setInfo(json.results);
        } catch (error) {
          console.error(error);
        } finally {
          setLoading(false);
        }
      };
    
      useEffect(() => {
        getInfo();
      }, [muscleId]);
return(
  
<View>
 
{isLoading ? (
        <ActivityIndicator />
      ) : (   
    <FlatList
    data={info}
    keyExtractor={(item) => item.id.toString()}
    renderItem ={({ item }) => (

    <View style={styles.container}>
      
    <Text style={styles.workoutTitle}>Workout Name: {item.name}</Text>

    <Text style={styles.description}>{item.description}</Text>
    <Image source={{uri:`https://wger.de/static/images/muscles/secondary/muscle-${muscleId}.svg`}}></Image>


    </View>
    
)}
/>
      )}
</View>
      
)};

export default MuscleInfo;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    borderBottomWidth: 5,
    borderBottomColor: '#ccc',
    padding:20,
    borderWidth:1,
    borderRadius:5,
  },
  workoutTitle:{
    fontSize:17,
    fontWeight:'bold',
    marginBottom:10,
    
  
  },
  description:{
    fontSize:15,
    lineHeight:14,
    marginBottom:12,
    textAlign:'justify',
    letterSpacing:0.5,
  }

})
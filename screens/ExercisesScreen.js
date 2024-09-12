import React, {useEffect, useState} from 'react';
import { Button, StyleSheet, Text, View, ActivityIndicator, FlatList, useWindowDimensions  } from 'react-native';
import CheckBox from 'expo-checkbox';
import RenderHtml from 'react-native-render-html';

const ExercisesScreen = ({route, navigation}) => {
  const { itemId } = route.params;
  const [isLoading, setLoading] = useState(true);
  const [selectedItems, setSelectedItems] = useState({});
  const [data, setData] = useState([]);
  const [value, setValue] = useState(null);
  const API_KEY = '966ac55de3c816f715d15d864b887dcebf0f2626';
  const { width } = useWindowDimensions();

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try{
      const response = await fetch('https:/wger.de/api/v2/exercise/?language=2&limit=999&equipment='+itemId,{
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
  }

  const handleCheckBoxChange = (id) => {
    setSelectedItems((prevSelectedItems) => ({
      ...prevSelectedItems,
      [id]: !prevSelectedItems[id],
    }));
  }

  return (
    <View style={styles.container}>
      <View style={styles.container}>
        <Text>Select Exercises:</Text>
      </View>

      <Text>Select Exercises</Text>
      {isLoading ? (
        <ActivityIndicator />
      ) : (
        <FlatList
          data={data}
          keyExtractor={({ id }) => id.toString()}
          renderItem={({ item }) => (
            <View style={styles.container}>
                <View style={styles.itemContainer}>
                    <CheckBox
                        value={selectedItems[item.id] || false}
                        onValueChange={() => handleCheckBoxChange(item.id)}
                    />
                    <Text style={styles.itemName}>{item.name}</Text>
                </View>
                <View style={styles.textContainer}>
                  <RenderHtml
                    contentWidth={width - 60}
                    source={{ html: item.description }}
                  />
                </View>
              </View>
          )}
          />
      )}

      <Text>Save</Text>
      <Button
        title='Save'
        onPress={() => navigation.navigate("Home")}
      />
    </View>
    )
}

export default ExercisesScreen

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  itemContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
  textContainer: {
    flex: 1,
    marginLeft: 10,
  },
  itemName: {
    fontWeight: 'bold',
  },
  itemDescription: {
    color: '#666',
  },
});
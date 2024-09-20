/*
This screen shows the exercises that use the equipment chosen by the user in EquipmentScreen
*/
import React from 'react';
import { Button, StyleSheet, Text, View, ActivityIndicator, FlatList, useWindowDimensions } from 'react-native';
import RenderHtml from 'react-native-render-html';
import useFetchData from './RestApi';

const ExercisesScreen = ({ route, navigation }) => {
  const { itemId } = route.params;
  const { data, isLoading } = useFetchData('exercise', `equipment=${itemId}`);
  const { width } = useWindowDimensions();

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
                <Text style={styles.itemName}>{item.name}</Text>
              </View>
              <View style={styles.textContainer}>
                <RenderHtml contentWidth={width - 60} source={{ html: item.description }} />
              </View>
            </View>
          )}
        />
      )}

      <Button title="Home" onPress={() => navigation.navigate('Home')} />
    </View>
  );
};

export default ExercisesScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    borderBottomWidth: 5,
    borderBottomColor: '#ccc',
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

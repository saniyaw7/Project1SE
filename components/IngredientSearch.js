import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, FlatList, TouchableOpacity, StyleSheet } from 'react-native';

const IngredientSearch = ({ navigation }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [ingredients, setIngredients] = useState([]);
  const [selectedIngredient, setSelectedIngredient] = useState(null);

  const fetchIngredients = async (query) => {
    try {
      const response = await fetch(`https://wger.de/api/v2/ingredient/?name=${query}`);
      const data = await response.json();
      setIngredients(data.results);
    } catch (error) {
      console.error('Error fetching ingredients:', error);
    }
  };

  useEffect(() => {
    if (searchTerm) {
      fetchIngredients(searchTerm);
    }
  }, [searchTerm]);

  const handleSelectIngredient = (ingredient) => {
    setSelectedIngredient(ingredient);
    navigation.navigate('IngredientDetail', { ingredient });
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Search Ingredients</Text>
      <TextInput
        style={styles.input}
        placeholder="Search for an ingredient"
        value={searchTerm}
        onChangeText={(text) => setSearchTerm(text)}
      />
      <FlatList
        data={ingredients}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <TouchableOpacity
            style={styles.ingredientItem}
            onPress={() => handleSelectIngredient(item)}
          >
            <Text style={styles.ingredientText}>{item.name}</Text>
          </TouchableOpacity>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#f7f7f7',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
    color: '#27ae60',
  },
  input: {
    height: 50,
    borderColor: 'gray',
    borderWidth: 1,
    borderRadius: 10,
    paddingHorizontal: 10,
    marginBottom: 20,
  },
  ingredientItem: {
    padding: 15,
    backgroundColor: '#fff',
    borderRadius: 10,
    marginBottom: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 5,
  },
  ingredientText: {
    fontSize: 18,
  },
});

export default IngredientSearch;

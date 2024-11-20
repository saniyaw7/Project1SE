import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, ActivityIndicator } from 'react-native';

const IngredientDetail = ({ route }) => {
  const { ingredient } = route.params;
  const [ingredientInfo, setIngredientInfo] = useState(null);

  const fetchIngredientInfo = async () => {
    try {
      const response = await fetch(`https://wger.de/api/v2/ingredientinfo/${ingredient.id}`);
      const data = await response.json();
      setIngredientInfo(data);
    } catch (error) {
      console.error('Error fetching ingredient info:', error);
    }
  };

  useEffect(() => {
    fetchIngredientInfo();
  }, []);

  if (!ingredientInfo) {
    return (
      <View style={styles.loadingContainer}>
        <ActivityIndicator size="large" color="#27ae60" />
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{ingredient.name}</Text>
      <Text style={styles.label}>Calories: {ingredientInfo.calories} kcal</Text>
      <Text style={styles.label}>Protein: {ingredientInfo.protein} g</Text>
      <Text style={styles.label}>Fat: {ingredientInfo.fat} g</Text>
      <Text style={styles.label}>Carbohydrates: {ingredientInfo.carbohydrates} g</Text>
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
  label: {
    fontSize: 18,
    marginBottom: 10,
  },
  loadingContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default IngredientDetail;

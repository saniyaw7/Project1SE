import React, { useState, useEffect } from 'react';
import { View, Text, FlatList, StyleSheet, TouchableOpacity } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { Ionicons } from '@expo/vector-icons';

const ViewAllComments = () => {
  const [comments, setComments] = useState([]);
  const [sortedBy, setSortedBy] = useState('recent'); // Can sort by 'recent' or 'upvotes'

  useEffect(() => {
    loadComments();
  }, []);

  const loadComments = async () => {
    try {
      const storedComments = await AsyncStorage.getItem('@exercise_comments');
      if (storedComments !== null) {
        setComments(JSON.parse(storedComments));
      }
    } catch (error) {
      console.error('Error loading comments', error);
    }
  };

  const sortComments = (criteria) => {
    let sortedComments = [...comments];
    if (criteria === 'upvotes') {
      sortedComments.sort((a, b) => b.upvotes - a.upvotes);
    } else {
      // Sort by most recent
      sortedComments.sort((a, b) => new Date(b.date) - new Date(a.date));
    }
    setSortedBy(criteria);
    setComments(sortedComments);
  };

  const renderCommentItem = ({ item }) => (
    <View style={styles.commentContainer}>
      <Text style={styles.exerciseName}>{item.exercise}</Text>
      <Text style={styles.commentText}>{item.comment}</Text>
      <View style={styles.voteContainer}>
        <Ionicons name="arrow-up" size={24} color="green" />
        <Text>{item.upvotes}</Text>
        <Ionicons name="arrow-down" size={24} color="red" />
      </View>
    </View>
  );

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>Exercise Comments</Text>
        <TouchableOpacity onPress={() => sortComments('recent')}>
          <Text style={[styles.sortButton, sortedBy === 'recent' && styles.activeSort]}>Sort by Recent</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => sortComments('upvotes')}>
          <Text style={[styles.sortButton, sortedBy === 'upvotes' && styles.activeSort]}>Sort by Upvotes</Text>
        </TouchableOpacity>
      </View>

      <FlatList
        data={comments}
        renderItem={renderCommentItem}
        keyExtractor={(item, index) => index.toString()}
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
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#333',
  },
  sortButton: {
    fontSize: 16,
    color: '#2980B9',
    marginHorizontal: 10,
  },
  activeSort: {
    fontWeight: 'bold',
  },
  commentContainer: {
    backgroundColor: '#fff',
    padding: 15,
    borderRadius: 8,
    marginBottom: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.2,
    shadowRadius: 3,
  },
  exerciseName: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  commentText: {
    fontSize: 16,
    color: '#333',
  },
  voteContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 10,
  },
});

export default ViewAllComments;

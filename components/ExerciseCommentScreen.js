import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, FlatList, TextInput } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { FontAwesome } from '@expo/vector-icons'; // For upvote/downvote icons

const ExerciseCommentScreen = ({ route, navigation }) => {
  const { exercise } = route.params; // Get selected exercise from params
  const [comments, setComments] = useState([]);
  const [newComment, setNewComment] = useState('');

  // Load comments from AsyncStorage
  useEffect(() => {
    const loadComments = async () => {
      const storedComments = await AsyncStorage.getItem(`@comments_${exercise.name}`);
      if (storedComments) {
        setComments(JSON.parse(storedComments));
      }
    };
    loadComments();
  }, []);

  // Save comments to AsyncStorage (for both specific exercise and global)
  const saveComments = async (updatedComments, type) => {
    await AsyncStorage.setItem(`@comments_${exercise.name}`, JSON.stringify(updatedComments));

    // Update the global comments key as well
    const globalComments = await AsyncStorage.getItem('@exercise_comments');
    let parsedGlobalComments = globalComments ? JSON.parse(globalComments) : [];

    if (type === 'add') {
      const newGlobalComment = {
        exercise: exercise.name,
        comment: newComment,
        upvotes: 0,
        downvotes: 0,
        date: new Date().toISOString(),
      };

      parsedGlobalComments.push(newGlobalComment);
    } else {
      // Update global comments for vote changes
      parsedGlobalComments = parsedGlobalComments.map((globalComment) =>
        globalComment.exercise === exercise.name && globalComment.comment === updatedComments[type].text
          ? { ...globalComment, upvotes: updatedComments[type].upvotes, downvotes: updatedComments[type].downvotes }
          : globalComment
      );
    }

    await AsyncStorage.setItem('@exercise_comments', JSON.stringify(parsedGlobalComments));
  };

  // Handle adding a new comment
  const handleAddComment = () => {
    if (newComment.trim() !== '') {
      const updatedComments = [...comments, { text: newComment, upvotes: 0, downvotes: 0 }];
      setComments(updatedComments);
      saveComments(updatedComments, 'add'); // Pass 'add' to identify that we're adding a new comment
      setNewComment('');
    }
  };

  // Handle upvote/downvote
  const handleVote = (index, type) => {
    const updatedComments = [...comments];
    if (type === 'upvote') {
      updatedComments[index].upvotes += 1;
    } else {
      updatedComments[index].downvotes += 1;
    }
    setComments(updatedComments);
    saveComments(updatedComments, index); // Pass the index to identify which comment is being voted
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Comments for {exercise.name}</Text>

      <FlatList
        data={comments}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item, index }) => (
          <View style={styles.commentContainer}>
            <Text style={styles.commentText}>{item.text}</Text>
            <View style={styles.voteContainer}>
              <TouchableOpacity onPress={() => handleVote(index, 'upvote')}>
                <FontAwesome name="thumbs-up" size={24} color="#27ae60" />
              </TouchableOpacity>
              <Text>{item.upvotes}</Text>
              <TouchableOpacity onPress={() => handleVote(index, 'downvote')}>
                <FontAwesome name="thumbs-down" size={24} color="#c0392b" />
              </TouchableOpacity>
              <Text>{item.downvotes}</Text>
            </View>
          </View>
        )}
      />

      <View style={styles.addCommentContainer}>
        <TextInput
          style={styles.commentInput}
          placeholder="Add your tip or comment"
          value={newComment}
          onChangeText={setNewComment}
        />
        <TouchableOpacity style={styles.addButton} onPress={handleAddComment}>
          <Text style={styles.addButtonText}>Add Comment</Text>
        </TouchableOpacity>
      </View>
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
  commentContainer: {
    backgroundColor: '#fff',
    padding: 15,
    marginBottom: 10,
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 5,
  },
  commentText: {
    fontSize: 16,
    marginBottom: 10,
  },
  voteContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
  },
  addCommentContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 20,
  },
  commentInput: {
    flex: 1,
    borderColor: '#ddd',
    borderWidth: 1,
    borderRadius: 10,
    padding: 10,
    backgroundColor: '#fff',
  },
  addButton: {
    backgroundColor: '#27ae60',
    padding: 15,
    borderRadius: 10,
    marginLeft: 10,
  },
  addButtonText: {
    color: '#fff',
    fontWeight: 'bold',
  },
});

export default ExerciseCommentScreen;

import React from 'react';
import { render, waitFor } from '@testing-library/react-native';
import ViewAllComments from '../components/ViewAllComments';
import AsyncStorage from '@react-native-async-storage/async-storage';

// Mock AsyncStorage
jest.mock('@react-native-async-storage/async-storage', () => ({
  getItem: jest.fn(),
}));

jest.mock('@expo/vector-icons', () => ({
  Ionicons: () => 'Ionicons',
}));

describe('ViewAllComments', () => {
  beforeEach(() => {
    AsyncStorage.getItem.mockClear();
  });

  it('displays comments when available', async () => {
    // Mock AsyncStorage to return some comments
    const sampleComments = JSON.stringify([
      { exercise: 'Push-up', comment: 'Great exercise!', upvotes: 5, date: '2024-09-16' },
      { exercise: 'Squat', comment: 'Very effective', upvotes: 10, date: '2024-09-15' },
    ]);
    AsyncStorage.getItem.mockResolvedValueOnce(sampleComments);

    const { getByText } = render(<ViewAllComments />);

    // Verify that comments are rendered
    await waitFor(() => {
      expect(getByText('Push-up')).toBeTruthy();
      expect(getByText('Great exercise!')).toBeTruthy();
      expect(getByText('Squat')).toBeTruthy();
      expect(getByText('Very effective')).toBeTruthy();
    });
  });

  it('renders correctly when no comments are available', async () => {
    // Mock AsyncStorage to return null (no comments)
    AsyncStorage.getItem.mockResolvedValueOnce(null);

    const { queryByText } = render(<ViewAllComments />);

    // Verify that no comments are rendered
    await waitFor(() => {
      expect(queryByText('Push-up')).toBeNull();
      expect(queryByText('Great exercise!')).toBeNull();
      expect(queryByText('Squat')).toBeNull();
      expect(queryByText('Very effective')).toBeNull();
    });
  });
});

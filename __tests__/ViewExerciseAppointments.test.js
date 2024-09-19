// __tests__/ViewExerciseAppointments.test.js
import React from 'react';
import { render, waitFor } from '@testing-library/react-native';
import ViewExerciseAppointments from '../components/ViewExerciseAppointments';
import AsyncStorage from '@react-native-async-storage/async-storage';

jest.mock('@react-native-async-storage/async-storage', () => ({
  getItem: jest.fn(),
  setItem: jest.fn(),
}));

describe('ViewExerciseAppointments', () => {
  beforeEach(() => {
    AsyncStorage.getItem.mockClear();
  });

  it('displays a message when there are no appointments', async () => {
    AsyncStorage.getItem.mockResolvedValueOnce(null);

    const { getByText } = render(<ViewExerciseAppointments />);

    await waitFor(() => {
      expect(getByText('No appointments found. Please schedule an exercise.')).toBeTruthy();
    });
  });

  it('displays appointments when available', async () => {
    const sampleData = JSON.stringify([
      { exercise: 'Push-up', date: '2024-09-18', time: '10:00 AM' },
    ]);
    AsyncStorage.getItem.mockResolvedValueOnce(sampleData);

    const { getByText } = render(<ViewExerciseAppointments />);

    await waitFor(() => {
      expect(getByText('Push-up - 2024-09-18 at 10:00 AM')).toBeTruthy();
    });
  });
});

// __tests__/ScheduleExercise.test.js
import React from 'react';
import { render, fireEvent, act } from '@testing-library/react-native';
import ScheduleExercise from '../components/ScheduleExercise';
import AsyncStorage from '@react-native-async-storage/async-storage';

jest.mock('@react-native-async-storage/async-storage', () => ({
  getItem: jest.fn(),
  setItem: jest.fn(),
}));

describe('ScheduleExercise', () => {
  beforeEach(() => {
    AsyncStorage.setItem.mockClear();
  });

  it('schedules an exercise and saves it to AsyncStorage', async () => {
    const exercise = { name: 'Push-up' };

    const { getByText } = render(
      <ScheduleExercise route={{ params: { exercise } }} navigation={{ goBack: jest.fn() }} />
    );

    await act(async () => {
      fireEvent.press(getByText('Schedule Exercise'));
    });

    // Check if the data in AsyncStorage was set with the correct format
    const callData = JSON.parse(AsyncStorage.setItem.mock.calls[0][1]);

    expect(callData).toEqual([
      {
        exercise: 'Push-up',
        date: expect.any(String), // Only verify it's a string, don't verify the exact value
        time: expect.any(String),
      },
    ]);
  });
});

// __tests__/LoginScreen.test.js

import React from 'react';
import { render, fireEvent, waitFor } from '@testing-library/react-native';
import LoginScreen from '../components/LoginScreen';
import { Alert } from 'react-native';
import { signInWithEmailAndPassword } from 'firebase/auth'; // Import the function

// Mock the Alert to prevent actual alerts during testing
jest.spyOn(Alert, 'alert');

// Mock firebase/auth module
jest.mock('firebase/auth', () => {
  const actualAuth = jest.requireActual('firebase/auth');
  return {
    ...actualAuth,
    signInWithEmailAndPassword: jest.fn(),
  };
});

// Mock the navigation prop
const navigation = {
  navigate: jest.fn(),
};

describe('LoginScreen', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('renders all input fields and buttons correctly', () => {
    const { getByPlaceholderText, getByText } = render(<LoginScreen navigation={navigation} />);

    expect(getByPlaceholderText('Email')).toBeTruthy();
    expect(getByPlaceholderText('Password')).toBeTruthy();
    expect(getByText('Login')).toBeTruthy();
    expect(getByText("Don't have an account? Register")).toBeTruthy();
  });

  it('handles successful login', async () => {
    const userCredential = { user: { email: 'test@example.com' } };
    signInWithEmailAndPassword.mockResolvedValueOnce(userCredential);

    const { getByPlaceholderText, getByText } = render(<LoginScreen navigation={navigation} />);

    fireEvent.changeText(getByPlaceholderText('Email'), 'test@example.com');
    fireEvent.changeText(getByPlaceholderText('Password'), 'password123');
    fireEvent.press(getByText('Login'));

    await waitFor(() => {
      expect(signInWithEmailAndPassword).toHaveBeenCalledWith(expect.anything(), 'test@example.com', 'password123');
      expect(Alert.alert).toHaveBeenCalledWith('Success', 'Logged in successfully!');
      expect(navigation.navigate).toHaveBeenCalledWith('Home');
    });
  });

  it('handles login failure', async () => {
    const error = { message: 'Invalid email or password' };
    signInWithEmailAndPassword.mockRejectedValueOnce(error);

    const { getByPlaceholderText, getByText } = render(<LoginScreen navigation={navigation} />);

    fireEvent.changeText(getByPlaceholderText('Email'), 'wrong@example.com');
    fireEvent.changeText(getByPlaceholderText('Password'), 'wrongpassword');
    fireEvent.press(getByText('Login'));

    await waitFor(() => {
      expect(signInWithEmailAndPassword).toHaveBeenCalledWith(expect.anything(), 'wrong@example.com', 'wrongpassword');
      expect(Alert.alert).toHaveBeenCalledWith('Login Failed', 'Invalid email or password');
      expect(navigation.navigate).not.toHaveBeenCalled();
    });
  });

  it('navigates to Register screen when "Register" button is pressed', () => {
    const { getByText } = render(<LoginScreen navigation={navigation} />);

    fireEvent.press(getByText("Don't have an account? Register"));

    expect(navigation.navigate).toHaveBeenCalledWith('Register');
  });
});

// firebaseConfig.js
import { initializeApp, getApps } from 'firebase/app';
import { initializeAuth, getReactNativePersistence, getAuth } from 'firebase/auth';
import AsyncStorage from '@react-native-async-storage/async-storage';

const firebaseConfig = {
  apiKey: "AIzaSyCPB6A7ANAVDTmWses4EZbSv6ParGKludQ",
  authDomain: "fitlife-hub-b3db4.firebaseapp.com",
  projectId: "fitlife-hub-b3db4",
  storageBucket: "fitlife-hub-b3db4.appspot.com",
  messagingSenderId: "943978741706",
  appId: "1:943978741706:android:cfe1e47db1fbbdf3119933",
  measurementId: "G-measurement-id"
};

// Initialize Firebase only if there are no existing initialized apps
let app;
if (!getApps().length) {
  app = initializeApp(firebaseConfig);
} else {
  app = getApps()[0]; // Use the existing app
}

// Initialize Auth with AsyncStorage for persistence, but only once
let auth;
if (!getAuth().app) {
  auth = initializeAuth(app, {
    persistence: getReactNativePersistence(AsyncStorage)
  });
} else {
  auth = getAuth(); // Use the already initialized auth instance
}

export { auth };

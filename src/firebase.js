// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyCCxraihUlUxUVMSNEmYdUzPYXQxJ0KjYE',
  authDomain: 'react-disney-plus-app-42b96.firebaseapp.com',
  projectId: 'react-disney-plus-app-42b96',
  storageBucket: 'react-disney-plus-app-42b96.appspot.com',
  messagingSenderId: '947149402727',
  appId: '1:947149402727:web:52f0d22ab881308fe21ac2',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;

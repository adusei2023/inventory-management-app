// firebase.js
import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { getAnalytics, isSupported } from 'firebase/analytics';

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAcGJV1_o9dJ46GUvmrsCcYyFj1kFsoWDw",
  authDomain: "pantry-app-3e20c.firebaseapp.com",
  projectId: "pantry-app-3e20c",
  storageBucket: "pantry-app-3e20c.appspot.com",
  messagingSenderId: "962725982332",
  appId: "1:962725982332:web:d0d7fab92dc2918f36d9f9",
  measurementId: "G-WZLQTZ4TZ4"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firestore
export const firestore = getFirestore(app);

// Conditionally initialize Firebase Analytics
let analytics;
if (typeof window !== 'undefined') {
  // Only run on the client
  isSupported().then((supported) => {
    if (supported) {
      analytics = getAnalytics(app);
    }
  });
}

export { analytics };

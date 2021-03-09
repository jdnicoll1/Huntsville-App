import * as firebase from 'firebase';
import firestore from 'firebase/firestore'

const firebaseConfig = {
  apiKey: "AIzaSyBdUnWxl6yZlHgMqzEkc4A4kRFLTGtgfQ0",
  authDomain: "huntsville-app.firebaseapp.com",
  projectId: "huntsville-app",
  storageBucket: "huntsville-app.appspot.com",
  messagingSenderId: "736093728717",
  appId: "1:736093728717:web:99299bdfc2f1bb1c955e84"
};
  // Initialize Firebase
firebase.initializeApp(firebaseConfig);

firebase.firestore();

export default firebase
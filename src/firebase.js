import firebase from 'firebase'
const firebaseConfig = {
    apiKey: process.env.FIREBASE_API_KEY,
    authDomain: "bl-techtalk.firebaseapp.com",
    databaseURL: "https://bl-techtalk-default-rtdb.firebaseio.com",
    projectId: "bl-techtalk",
    storageBucket: "bl-techtalk.appspot.com",
    messagingSenderId: "604149228022",
    appId: "1:604149228022:web:f2bf1e822c566c8766e7d7"
};
  
  firebase.initializeApp(firebaseConfig);

  export default firebase
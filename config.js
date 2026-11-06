import firebase from 'firebase';

const firebaseConfig = {
  apiKey: "AIzaSyBG6CCGqn6oAX8TEglKCASFT9XTqVyyxc8",
  authDomain: "todosapp-53ad9.firebaseapp.com",
  projectId: "todosapp-53ad9",
  storageBucket: "todosapp-53ad9.firebasestorage.app",
  messagingSenderId: "203950310064",
  appId: "1:203950310064:web:c0def165b052caaa4eb175",
};

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
  firebase.firestore().settings({ experimentalForceLongPolling: true });
}

export { firebase };


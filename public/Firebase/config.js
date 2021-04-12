import firebase from "firebase";
import "@firebase/auth";
import "@firebase/firestore";
import "@firebase/storage";
import "@firebase/database";

const firebaseConfig = {
  apiKey: "AIzaSyDxvMj1j7yEav7Citk0a-jWejM5Kj8y8BI",
  authDomain: "kalma-2f347.firebaseapp.com",
  projectId: "kalma-2f347",
  storageBucket: "kalma-2f347.appspot.com",
  messagingSenderId: "819707043248",
  appId: "1:819707043248:web:2784d093dc134161e08a75",
  measurementId: "G-M21FN22P7Y",
};

// Initialize Firebase

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}

export { firebase };

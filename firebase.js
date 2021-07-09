import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyDKBcwtZ_lbkj3b2z3GOvDMGCfcq6rI2WQ",
  authDomain: "clone-v2-673dc.firebaseapp.com",
  projectId: "clone-v2-673dc",
  storageBucket: "clone-v2-673dc.appspot.com",
  messagingSenderId: "893814501891",
  appId: "1:893814501891:web:a4b9c944b83fdfaefad436",
  measurementId: "G-92EZKF12Q3",
};

const app = !firebase.apps.length
  ? firebase.initializeApp(firebaseConfig)
  : firebase.app();

const db = app.firestore();

export default db;

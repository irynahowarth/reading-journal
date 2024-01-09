import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAbFw_6OjEoCQRzQLoyVCQHZ6nzjwn-dkE",
  authDomain: "reading-journal-5bd3d.firebaseapp.com",
  projectId: "reading-journal-5bd3d",
  storageBucket: "reading-journal-5bd3d.appspot.com",
  messagingSenderId: "558890647634",
  appId: "1:558890647634:web:d70cfce96fbdf8c2bc5f8b",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

export { app, auth, db };

import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

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
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);

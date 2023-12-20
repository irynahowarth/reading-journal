import {
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  GoogleAuthProvider,
  signInWithPopup,
} from "firebase/auth";
import { auth } from "../firebaseConfig";

export const LoginAPI = (email, password) => {
  return signInWithEmailAndPassword(auth, email, password);
};

export const SignupAPI = (email, password) => {
  return createUserWithEmailAndPassword(auth, email, password);
};

export const GoogleLoginAPI = () => {
  try {
    const provider = new GoogleAuthProvider();
    provider.addScope("https://www.googleapis.com/auth/contacts.readonly");
    return signInWithPopup(auth, provider);
  } catch (err) {
    return err;
  }
};

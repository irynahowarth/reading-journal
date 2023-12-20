import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebaseConfig";

export const LoginAPI = (email, password) => {
  return signInWithEmailAndPassword(auth, email, password);
};

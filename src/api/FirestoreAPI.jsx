import { db } from "../firebaseConfig";
import { collection, addDoc } from "firebase/firestore";

let booksRef = collection(db, "books");

export const bookStatus = async (object) => {
  try {
    const docRef = await addDoc(booksRef, {
      object,
    });
    console.log("Document written with ID: ", docRef.id);
  } catch (e) {
    console.error("Error adding document: ", e);
  }
};

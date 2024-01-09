import { db } from "../firebaseConfig";
import { collection, addDoc, serverTimestamp } from "firebase/firestore";

let booksRef = collection(db, "books");

export const bookStatus = async (data) => {
  try {
    const docRef = await addDoc(booksRef, {
      ...data,
      createdAt: serverTimestamp(),
    });
    console.log("Document written with ID: ", docRef.id);
  } catch (e) {
    console.error("Error adding document: ", e);
  }
};

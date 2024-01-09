import React from "react";
import { auth } from "../firebaseConfig";
import { useNavigate } from "react-router-dom";
import { onAuthStateChanged, signOut, updateProfile } from "firebase/auth";
import DialogComponent from "./common/Dialog";
import { bookStatus } from "../api/FirestoreAPI";

export default function HomeComponent() {
  const navigate = useNavigate();
  const [currentUser, setCurrentUser] = React.useState(null);
  const [showForm, setShowForm] = React.useState(false);
  const [formData, setFormData] = React.useState(null);

  const signout = () => {
    signOut(auth)
      .then(() => {
        navigate("/login");
      })
      .catch((error) => {
        console.log(error.message);
      });
  };

  const showUpdateUserForm = () => {
    setShowForm(true);
  };

  const updateUser = () => {
    updateProfile(auth.currentUser, {
      displayName: formData.name || currentUser.displayName,
    })
      .then(() => {
        setCurrentUser(auth.currentUser);
        setShowForm(false);
      })
      .catch((error) => {
        console.log(error.message);
      });
  };

  React.useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user?.accessToken) {
        setCurrentUser(user.providerData[0]);
        setFormData({
          name: user.providerData[0].name,
        });
      } else {
        console.log("sign out");
      }
    });
  }, []);

  const form = (
    <form onSubmit={updateUser}>
      <input
        type="name"
        placeholder="name"
        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
      />
      <button type="submit">Update data</button>
    </form>
  );

  return (
    <div>
      <h1>HomeComponent</h1>
      {currentUser !== null && <h3>Name: {currentUser.displayName}</h3>}
      {currentUser !== null && <h3>Email: {currentUser.email}</h3>}
      {currentUser !== null && !showForm && (
        <button onClick={showUpdateUserForm}>Change Name</button>
      )}
      {currentUser !== null && showForm && form}
      {currentUser !== null && <button onClick={signout}>Sing out</button>}
      {currentUser !== null && <DialogComponent addBook={bookStatus} />}
    </div>
  );
}

import React from "react";
import { SignupAPI } from "../api/authAPI";
import { useNavigate } from "react-router-dom";

export default function RegisterComponent() {
  const [credentials, setCredentials] = React.useState({});
  const navigate = useNavigate();

  const signup = async (e) => {
    e.preventDefault();
    const { email, password } = credentials;
    try {
      const res = await SignupAPI(email, password);
      console.log(res);
      navigate("/home");
    } catch (err) {
      console.log(err.message);
    }
  };

  return (
    <div>
      <h1>Register component</h1>
      <input
        placeholder="Email"
        type="email"
        onChange={(e) =>
          setCredentials({
            ...credentials,
            email: e.target.value,
          })
        }
      />
      <input
        placeholder="Password"
        type="password"
        onChange={(e) =>
          setCredentials({
            ...credentials,
            password: e.target.value,
          })
        }
      />
      <button onClick={signup}>Singup to App</button>
      <button onClick={() => navigate("/login")}>LogIn</button>
    </div>
  );
}

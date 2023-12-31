import React from "react";
import { LoginAPI, GoogleLoginAPI } from "../api/authAPI";
import { useNavigate } from "react-router-dom";

export default function LoginComponent() {
  const [credentials, setCredentials] = React.useState({});
  const navigate = useNavigate();

  const login = async (e) => {
    e.preventDefault();
    const { email, password } = credentials;
    try {
      const res = await LoginAPI(email, password);
      console.log(res);
      navigate("/home");
    } catch (err) {
      console.log(err.message);
    }
  };

  const googleLogin = async () => {
    const res = await GoogleLoginAPI();
    console.log(res);
  };

  return (
    <div>
      <h1>LoginComponent</h1>
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
      <button onClick={login}>Login to App</button>
      <button onClick={googleLogin}>Login with Google</button>
      <button onClick={() => navigate("/register")}>Sign up</button>
    </div>
  );
}

import React from "react";
import { LoginAPI } from "../api/authAPI";

export default function LoginComponent() {
  const [credentials, setCredentials] = React.useState({});

  const login = async (e) => {
    e.preventDefault();
    try {
      const res = await LoginAPI(credentials.email, credentials.password);
      console.log(res);
    } catch (err) {
      console.log(err.message);
    }
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
    </div>
  );
}

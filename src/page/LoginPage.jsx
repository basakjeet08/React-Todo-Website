import { useState } from "react";
import { useNavigate } from "react-router-dom";

function LoginPage() {
  // User State variable
  const [user, setUser] = useState({
    username: "",
    password: "",
  });

  // Update function Variable
  const updateUser = (event) => {
    const type = event.target.name;
    const value = event.target.value;

    setUser((previousUser) => {
      return {
        ...previousUser,
        [type]: value,
      };
    });
  };

  const onLogin = () => {
    console.log(user);
  };

  const navigate = useNavigate();

  return (
    <div className="auth-container">
      <div className="card" style={{ padding: 48, rowGap: 24 }}>
        <h1>Login</h1>

        <input
          value={user.username}
          onChange={updateUser}
          name="username"
          type="text"
          placeholder="Enter Username"
        />

        <input
          value={user.password}
          onChange={updateUser}
          name="password"
          type="password"
          placeholder="Enter Password"
        />

        <button onClick={onLogin}>Login</button>
        <button onClick={() => navigate("register")}>Register</button>
      </div>
    </div>
  );
}

export default LoginPage;

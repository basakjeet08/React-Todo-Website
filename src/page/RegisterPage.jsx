import { useState } from "react";
import { useNavigate } from "react-router-dom";

function RegisterPage() {
  // User State variable
  const [user, setUser] = useState({
    name: "",
    username: "",
    email: "",
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

  const onRegister = () => {
    console.log(user);
  };

  const navigate = useNavigate();

  return (
    <div className="auth-container">
      <div className="card" style={{ padding: 48, rowGap: 24 }}>
        <h1>Register</h1>
        <input
          value={user.name}
          onChange={updateUser}
          name="name"
          type="text"
          placeholder="Enter Name"
        />

        <input
          value={user.username}
          onChange={updateUser}
          name="username"
          type="text"
          placeholder="Enter Username"
        />

        <input
          value={user.email}
          onChange={updateUser}
          name="email"
          type="email"
          placeholder="Enter Email"
        />

        <input
          value={user.password}
          onChange={updateUser}
          name="password"
          type="password"
          placeholder="Enter Password"
        />

        <button onClick={onRegister}>Register</button>
        <button onClick={() => navigate("/")}>Login</button>
      </div>
    </div>
  );
}

export default RegisterPage;

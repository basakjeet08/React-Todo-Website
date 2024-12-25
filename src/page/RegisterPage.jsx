import { useNavigate } from "react-router-dom";
import useUserHook from "../hooks/UseUserHook";

function RegisterPage() {
  // User State variable
  const [user, setUser] = useUserHook();

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
          onChange={setUser}
          name="name"
          type="text"
          placeholder="Enter Name"
        />

        <input
          value={user.username}
          onChange={setUser}
          name="username"
          type="text"
          placeholder="Enter Username"
        />

        <input
          value={user.email}
          onChange={setUser}
          name="email"
          type="email"
          placeholder="Enter Email"
        />

        <input
          value={user.password}
          onChange={setUser}
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

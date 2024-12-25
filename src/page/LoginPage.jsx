import { useNavigate } from "react-router-dom";
import { loginUser } from "../services/AuthService";
import useUserHook from "../hooks/UseUserHook";

function LoginPage() {
  // User State variable
  const [user, setUser] = useUserHook();
  const navigate = useNavigate();

  const onLogin = () => {
    loginUser(user)
      .then((tokenData) => {
        globalThis.token = tokenData.token;
        navigate("/home");
      })
      .catch((error) => alert(error));
  };

  return (
    <div className="auth-container">
      <div className="card" style={{ padding: 48, rowGap: 24 }}>
        <h1>Login</h1>

        <input
          value={user.username}
          onChange={setUser}
          name="username"
          type="text"
          placeholder="Enter Username"
        />

        <input
          value={user.password}
          onChange={setUser}
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

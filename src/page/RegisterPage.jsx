import { useNavigate } from "react-router-dom";
import useUserHook from "../hooks/UseUserHook";
import { registerUser } from "../services/AuthService";

function RegisterPage() {
  // User State variable
  const [user, setUser] = useUserHook();
  const navigate = useNavigate();
  const navigateToLogin = () => navigate("/login");

  const onRegister = (event) => {
    event.preventDefault();

    registerUser(user)
      .then((_) => navigateToLogin())
      .catch((error) => console.log(error));
  };

  return (
    <div className="auth-container">
      <form
        onSubmit={onRegister}
        className="card"
        style={{ padding: 48, rowGap: 24 }}
      >
        <h1>Register</h1>
        <input
          value={user.name}
          onChange={setUser}
          name="name"
          type="text"
          placeholder="Enter Name"
          autoComplete="name"
        />

        <input
          value={user.username}
          onChange={setUser}
          name="username"
          type="text"
          placeholder="Enter Username"
          autoComplete="username"
        />

        <input
          value={user.email}
          onChange={setUser}
          name="email"
          type="email"
          placeholder="Enter Email"
          autoComplete="email"
        />

        <input
          value={user.password}
          onChange={setUser}
          name="password"
          type="password"
          placeholder="Enter Password"
          autoComplete="new-password"
        />

        <button type="submit">Register</button>
        <button onClick={navigateToLogin}>Login</button>
      </form>
    </div>
  );
}

export default RegisterPage;

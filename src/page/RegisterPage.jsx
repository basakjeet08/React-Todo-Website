import { useNavigate } from "react-router-dom";
import useUserHook from "../hooks/UseUserHook";
import useRegister from "../hooks/useRegister";
import { useEffect } from "react";

function RegisterPage() {
  // State variable
  const [user, setUser] = useUserHook();
  const { data, loading, error, onFetch } = useRegister();
  const navigate = useNavigate();
  const navigateToLogin = () => navigate("/login");

  // Re-running the function after each change in the data variable
  useEffect(() => {
    if (data) navigateToLogin();
  }, [data]);

  /// When the user hits the submit button
  const onRegister = (event) => {
    event.preventDefault();
    onFetch(user);
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

        <button type="submit" disabled={loading}>
          {loading ? "Registering..." : "Register"}
        </button>
        <button disabled={loading} onClick={navigateToLogin}>
          Login
        </button>
        {error ? <p className="error-text">{error.message}</p> : null}
      </form>
    </div>
  );
}

export default RegisterPage;

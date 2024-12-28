import { useNavigate } from "react-router-dom";
import useRegister from "../hooks/useRegister";
import { useEffect } from "react";

function RegisterPage() {
  // State variable
  const { userInput, updateUserInput, data, loading, error, onFetch } =
    useRegister();
  const navigate = useNavigate();
  const navigateToLogin = () => navigate("/login");

  // Re-running the function after each change in the data variable
  useEffect(() => {
    if (data) navigateToLogin();
  }, [data]);

  /// When the user hits the submit button
  const onRegister = (event) => {
    event.preventDefault();
    onFetch();
  };

  return (
    <div className="auth-container">
      <form onSubmit={onRegister} className="card" style={{ padding: "56px" }}>
        <h1>Register</h1>
        <input
          value={userInput.name}
          onChange={updateUserInput}
          name="name"
          type="text"
          placeholder="Enter Name"
          autoComplete="name"
        />

        <input
          value={userInput.username}
          onChange={updateUserInput}
          name="username"
          type="text"
          placeholder="Enter Username"
          autoComplete="username"
        />

        <input
          value={userInput.password}
          onChange={updateUserInput}
          name="password"
          type="password"
          placeholder="Enter Password"
          autoComplete="new-password"
        />

        <input
          value={userInput.confirmPassword}
          onChange={updateUserInput}
          name="confirmPassword"
          type="password"
          placeholder="Re-Enter Password"
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

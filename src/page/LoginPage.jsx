import { useNavigate } from "react-router-dom";
import useLogin from "../hooks/useLogin";
import { useEffect } from "react";

function LoginPage() {
  // State variable
  const { userInput, updateUserInput, data, loading, error, onFetch } =
    useLogin();
  const navigate = useNavigate();
  const navigateToRegister = () => navigate("/register");
  const navigateToHome = () => navigate("/");

  // Re - running the function after each change in the data variable
  useEffect(() => {
    if (data) navigateToHome();
  }, [data]);

  // When the user hits Login Button
  const onLogin = (event) => {
    event.preventDefault();
    onFetch();
  };

  return (
    <div className="auth-container">
      <form
        onSubmit={onLogin}
        className="card"
        style={{ padding: 48, rowGap: 24 }}
      >
        <h1>Login</h1>

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
          autoComplete="password"
        />

        <button disabled={loading} type="submit">
          {loading ? "Logging In..." : "Login"}
        </button>
        <button disabled={loading} onClick={navigateToRegister}>
          Register
        </button>

        {error ? <p className="error-text">{error.message}</p> : null}
      </form>
    </div>
  );
}

export default LoginPage;

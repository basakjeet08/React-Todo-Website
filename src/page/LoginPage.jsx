import { useNavigate } from "react-router-dom";
import useLogin from "../hooks/useLogin";
import { useEffect } from "react";
import Form from "../components/Form";
import ColumnCard from "../components/ColumnCard";
import Input from "../components/Input";
import PrimaryButton from "../components/PrimaryButton";

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
    <div className="flex h-screen w-screen justify-center items-center">
      <ColumnCard>
        <h1 className="font-bold text-2xl text-primary">Login</h1>
        <Form onSubmit={onLogin}>
          <Input
            value={userInput.username}
            onChange={updateUserInput}
            name="username"
            type="text"
            placeholder="Enter Username"
            autoComplete="username"
          />

          <Input
            value={userInput.password}
            onChange={updateUserInput}
            name="password"
            type="password"
            placeholder="Enter Password"
            autoComplete="password"
          />

          <PrimaryButton disabled={loading} type="submit">
            {loading ? "Logging In..." : "Login"}
          </PrimaryButton>
          <PrimaryButton disabled={loading} onClick={navigateToRegister}>
            Register
          </PrimaryButton>
        </Form>
        {error ? (
          <p className="text-red-400 text-center">{error.message}</p>
        ) : null}
      </ColumnCard>
    </div>
  );
}

export default LoginPage;

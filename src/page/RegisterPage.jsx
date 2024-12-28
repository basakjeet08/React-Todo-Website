import { useNavigate } from "react-router-dom";
import useRegister from "../hooks/useRegister";
import { useEffect } from "react";
import Form from "../components/Form";
import Card from "../components/Card";
import Input from "../components/Input";
import PrimaryButton from "../components/PrimaryButton";

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
    <div className="flex h-screen w-screen justify-center items-center">
      <Card>
        <h1 className="font-bold text-2xl text-primary">Register</h1>

        <Form onSubmit={onRegister}>
          <Input
            value={userInput.name}
            onChange={updateUserInput}
            name="name"
            type="text"
            placeholder="Enter Name"
            autoComplete="name"
          />

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
            autoComplete="new-password"
          />

          <Input
            value={userInput.confirmPassword}
            onChange={updateUserInput}
            name="confirmPassword"
            type="password"
            placeholder="Re-Enter Password"
            autoComplete="new-password"
          />

          <PrimaryButton type="submit" disabled={loading}>
            {loading ? "Registering..." : "Register"}
          </PrimaryButton>
          <PrimaryButton disabled={loading} onClick={navigateToLogin}>
            Login
          </PrimaryButton>
        </Form>
        {error ? (
          <p className="text-red-400 text-center">{error.message}</p>
        ) : null}
      </Card>
    </div>
  );
}

export default RegisterPage;

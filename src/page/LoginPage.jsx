import { useNavigate } from "react-router-dom";

function LoginPage() {
  const navigate = useNavigate();
  return <button onClick={() => navigate("/register")}>Register</button>;
}

export default LoginPage;

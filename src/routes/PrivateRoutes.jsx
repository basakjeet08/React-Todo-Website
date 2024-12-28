import { Navigate } from "react-router-dom";

function isAuthenticated() {
  const token = localStorage.getItem("token");
  return !!token;
}

function PrivateRoutes({ children }) {
  return isAuthenticated() ? children : <Navigate to="/login" />;
}

export default PrivateRoutes;

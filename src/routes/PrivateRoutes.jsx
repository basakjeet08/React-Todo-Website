import { Navigate } from "react-router-dom";
import useFetch from "../hooks/useFetch";
import { useEffect } from "react";

function PrivateRoutes({ children }) {
  const { data, loading, error, fetchData } = useFetch();

  useEffect(() => {
    const token = localStorage.getItem("token");
    const refreshToken = localStorage.getItem("refreshToken");
    console.log("Verifying User Tokens...");

    fetchData("http://localhost:8080/verify", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ token, refreshToken }),
    });
  }, []);

  if (loading) return <h1>Loading...</h1>;
  if (error) return <Navigate to="/login" />;
  if (data) {
    console.log("Tokens Verified...");
    localStorage.setItem("token", data.token);
    localStorage.setItem("refreshToken", data.refreshToken);
    return children;
  }
}

export default PrivateRoutes;

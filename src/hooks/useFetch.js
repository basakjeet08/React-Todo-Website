import { useState } from "react";
import { BASE_URL, VERIFY_ENDPOINT } from "../utils/urlConstants";

function useFetch() {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetchData = async (url, options) => {
    try {
      setLoading(true);
      setError(null);

      let response = await fetch(url, options);

      if (response.status === 403) {
        const { token } = await refreshTokens();

        if (token) {
          const retryOptions = {
            method: options.method || "GET",
            headers: {
              ...options.headers,
              Authorization: `Bearer ${token}`,
            },
          };

          response = await fetch(url, retryOptions);
        }
      }

      const apiData = await response.json();
      setData(apiData);
    } catch (error) {
      console.log(error);
      setError(error);
    } finally {
      setLoading(false);
    }
  };

  return { data, loading, error, fetchData };
}

async function refreshTokens() {
  try {
    console.log("Refreshing Tokens...");
    const refreshToken = localStorage.getItem("refreshToken");

    const response = await fetch(BASE_URL + VERIFY_ENDPOINT, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ refreshToken }),
    });

    const apiData = await response.json();

    localStorage.setItem("token", apiData.token);
    localStorage.setItem("refreshToken", apiData.refreshToken);

    console.log("Tokens Refreshed Successfully");

    return apiData;
  } catch (error) {
    console.error("Failed to refresh token : " + error);
    redirectToLogin();
    return null;
  }
}

function redirectToLogin() {
  localStorage.removeItem("token");
  localStorage.removeItem("refreshToken");
  window.location.href = "/login";
}

export default useFetch;

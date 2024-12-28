import { useState } from "react";

// Login API Endpoint
const LOGIN_ENDPOINT = "http://localhost:8080/login";

function useLogin() {
  const [userInput, setUserInput] = useState({
    username: "",
    password: "",
  });

  const updateUserInput = (event) => {
    const name = event.target.name;
    const value = event.target.value;

    setUserInput((prev) => {
      return {
        ...prev,
        [name]: value,
      };
    });
  };

  // All the states needed (Data -> Successful , Loading and Error State)
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  // Function which calls the API and changes the states accordingly
  const onFetch = async () => {
    try {
      setLoading(true);
      setError(null);

      // checking if the user inputs are valid or not
      isValidInput(userInput);

      // Posting Data to the API
      const response = await fetch(LOGIN_ENDPOINT, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(userInput),
      });

      // Checking if the API response is Status OK
      if (!response.ok) {
        const errorResponse = await response.json();
        const error = errorResponse.message || "Unknown Error Occured !!";
        throw new Error(error);
      }

      // Converting String response to JSON
      const apiData = await response.json();

      // Storing the token in our Local Storage
      localStorage.setItem("token", apiData.token);
      localStorage.setItem("refreshToken", apiData.refreshToken);
      setData(apiData);
    } catch (error) {
      setError(error);
    } finally {
      setLoading(false);
    }
  };

  return { userInput, updateUserInput, data, loading, error, onFetch };
}

function isValidInput({ username, password }) {
  if (!username || !password) {
    throw new Error("Please Fill all the Fields");
  }
}

export default useLogin;

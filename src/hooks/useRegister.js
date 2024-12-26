import { useState } from "react";

// Register API Endpoint
const REGISTER_ENDPOINT = "http://localhost:8080/register";

function useRegister() {
  // All the states needed (Data -> Successful , Loading and Error State)
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  // Function which calls the API and changes the states accordingly
  const onFetch = async (user) => {
    try {
      setLoading(true);
      setError(null);

      // checking if the user inputs are valid or not
      isValidInput(user);

      // Posting Data to the API
      const response = await fetch(REGISTER_ENDPOINT, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(user),
      });

      // Checking if the API response is Status OK
      if (!response.ok) {
        const errorResponse = await response.json();
        const error = errorResponse.message || "Unknown Error Occured !!";
        throw new Error(error);
      }

      // Converting String response to JSON
      const apiData = await response.json();
      setData(apiData);
    } catch (error) {
      setError(error);
    } finally {
      setLoading(false);
    }
  };

  return { data, loading, error, onFetch };
}

function isValidInput({ name, username, email, password }) {
  if (!name || !username || !email || !password) {
    throw new Error("Please Enter all the Fields");
  }

  if (password.length < 6) {
    throw new Error("Password needs to be more than 5 characters");
  }
}

export default useRegister;

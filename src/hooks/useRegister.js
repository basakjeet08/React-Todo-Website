import { useState } from "react";
import { BASE_URL, REGISTER_ENDPOINT } from "../utils/urlConstants";

function useRegister() {
  const [userInput, setUserInput] = useState({
    name: "",
    username: "",
    password: "",
    confirmPassword: "",
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
      const response = await fetch(BASE_URL + REGISTER_ENDPOINT, {
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
      setData(apiData);
    } catch (error) {
      setError(error);
    } finally {
      setLoading(false);
    }
  };

  return { userInput, updateUserInput, data, loading, error, onFetch };
}

function isValidInput({ name, username, password, confirmPassword }) {
  if (!name || !username || !password || !confirmPassword) {
    throw new Error("Please Enter all the Fields");
  }

  if (password.length < 6) {
    throw new Error("Password needs to be more than 5 characters");
  }

  if (confirmPassword !== password) {
    throw new Error("Password and Re - Enter Password should be same");
  }
}

export default useRegister;

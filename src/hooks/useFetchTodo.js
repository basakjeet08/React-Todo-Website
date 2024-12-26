import { useState } from "react";

const TODO_ENDPOINT = "http://localhost:8080/todos";

function useFetchTodo() {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const resetState = () => {
    setData(null);
    setLoading(false);
    setError(null);
  };

  const fetchTodo = async () => {
    try {
      setLoading(true);
      setError(null);
      const token = localStorage.getItem("token");

      const response = await fetch(TODO_ENDPOINT, {
        headers: { Authorization: `Bearer ${token}` },
      });

      if (!response.ok) {
        const errorResponse = await response.json();
        const error = errorResponse.message || "Unknown Error Occured";

        throw new Error(error);
      }

      const apiData = await response.json();
      setData(apiData);
    } catch (error) {
      setError(error);
    } finally {
      setLoading(false);
    }
  };

  const deleteTodoById = async (todoId) => {
    try {
      setLoading(true);
      setError(null);
      const token = localStorage.getItem("token");

      const response = await fetch(TODO_ENDPOINT + `/${todoId}`, {
        method: "DELETE",
        headers: { Authorization: `Bearer ${token}` },
      });

      if (!response.ok) {
        const errorResponse = await response.json();
        const error = errorResponse.message || "Unknown Error Occured";

        throw new Error(error);
      }

      const apiData = await response.json();
      setData(apiData);
    } catch (error) {
      setError(error);
    } finally {
      setLoading(false);
    }
  };

  return { data, loading, error, fetchTodo, deleteTodoById, resetState };
}

export default useFetchTodo;

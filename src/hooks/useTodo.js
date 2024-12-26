import { useState } from "react";

const TODO_ENDPOINT = "http://localhost:8080/todos";

function useTodo() {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const apiCallHandler = async (request) => {
    try {
      const response = await request();

      if (!response.ok) {
        const errorResponse = await response.json();
        const error = errorResponse.message || "Unknown Error Occured";
        throw new Error(error);
      }

      const apiData = await response.json();
      setData(apiData);
    } catch (error) {
      setError(error);
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  const postTodo = (todo) => {
    const token = localStorage.getItem("token");

    apiCallHandler(() => {
      return fetch(TODO_ENDPOINT, {
        method: "POST",
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify(todo),
      });
    });
  };

  const fetchTodo = () => {
    const token = localStorage.getItem("token");

    apiCallHandler(() => {
      return fetch(TODO_ENDPOINT, {
        headers: { Authorization: `Bearer ${token}` },
      });
    });
  };

  const deleteTodoById = (todoId) => {
    const token = localStorage.getItem("token");

    apiCallHandler(() => {
      return fetch(TODO_ENDPOINT + `/${todoId}`, {
        method: "DELETE",
        headers: { Authorization: `Bearer ${token}` },
      });
    });
  };

  return { data, loading, error, postTodo, fetchTodo, deleteTodoById };
}

export default useTodo;

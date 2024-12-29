import { BASE_URL, TODO_ENDPOINT } from "../utils/urlConstants";
import useFetch from "./useFetch";

function useTodo() {
  const token = localStorage.getItem("token");
  const { data, fetchData } = useFetch();

  // Fetch all Todos
  const getTodo = () => {
    fetchData(BASE_URL + TODO_ENDPOINT, {
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
    });
  };

  // Post or Create a new Todo
  const postTodo = (todo) => {
    fetchData(BASE_URL + TODO_ENDPOINT, {
      method: "POST",
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify(todo),
    });
  };

  // Update an existing Todo
  const updateTodo = (checked, id) => {
    fetchData(BASE_URL + TODO_ENDPOINT, {
      method: "PUT",
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ id: id, isCompleted: checked }),
    });
  };

  // Delete an existing Todo
  const deleteTodo = (todoId) => {
    fetchData(`${BASE_URL + TODO_ENDPOINT}/${todoId}`, {
      method: "DELETE",
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
    });
  };

  return { data, getTodo, postTodo, updateTodo, deleteTodo };
}

export default useTodo;

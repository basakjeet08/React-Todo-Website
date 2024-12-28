import useFetch from "./useFetch";

function useTodo() {
  const TODO_ENDPOINT = "http://localhost:8080/todos";
  const token = localStorage.getItem("token");
  const { data, fetchData } = useFetch();

  // Fetch all Todos
  const getTodo = () => {
    fetchData(TODO_ENDPOINT, {
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
    });
  };

  // Post or Create a new Todo
  const postTodo = (todo) => {
    fetchData(TODO_ENDPOINT, {
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
    fetchData(TODO_ENDPOINT, {
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
    fetchData(`${TODO_ENDPOINT}/${todoId}`, {
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

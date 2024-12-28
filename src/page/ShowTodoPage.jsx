import { useEffect } from "react";
import useTodo from "../hooks/useTodo";
import AddIcon from "@mui/icons-material/Add";
import { useState } from "react";

function ShowTodoPage() {
  // Todo State
  const [todoInput, setTodoInput] = useState({ description: "" });
  const { data, postTodo, fetchTodo, deleteTodoById } = useTodo();

  const updateTodo = (newValue) => setTodoInput({ description: newValue });
  const onTodoSubmit = (event) => {
    event.preventDefault();
    if (!todoInput.description) return;
    postTodo(todoInput);
    updateTodo("");
  };

  useEffect(() => fetchTodo(), []);

  return (
    <div style={{ flex: 1 }}>
      <div className="todo-list-container">
        <div
          style={{ display: "flex", width: "100%", justifyContent: "center" }}
        >
          <form
            className="card"
            onSubmit={onTodoSubmit}
            style={{ flexDirection: "row" }}
          >
            <input
              type="text"
              style={{ width: 500 }}
              value={todoInput.description}
              onChange={(event) => updateTodo(event.target.value)}
              placeholder="Enter New Todo to Add"
            />

            <button>
              <AddIcon />
            </button>
          </form>
        </div>

        {data?.map((todo) => (
          <div key={todo.id} className="card" style={{ width: 350 }}>
            <p className="todo-description">{todo.description}</p>
            <button onClick={() => deleteTodoById(todo.id)}>Delete</button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ShowTodoPage;

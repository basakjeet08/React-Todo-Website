import { useState } from "react";
import AddIcon from "@mui/icons-material/Add";

function InputTodoComponent({ style, onAddClick }) {
  // Todo State Hook
  const [todo, setTodo] = useState({
    title: "",
    description: "",
  });

  // This Function updates the Todo Input State
  const updateTodo = (event) => {
    const value = event.target.value;
    const name = event.target.name;

    setTodo((prevTodo) => {
      return { ...prevTodo, [name]: value };
    });
  };

  const onSubmit = (event) => {
    event.preventDefault();

    onAddClick(todo);
    setTodo({
      title: "",
      description: "",
    });
  };

  // Returning the TODO Add component
  return (
    <div className="input-container">
      <form
        onSubmit={onSubmit}
        className="card"
        style={{ flexDirection: "row" }}
      >
        <input
          value={todo.title}
          onChange={updateTodo}
          name="title"
          type="text"
          placeholder="Enter Title"
        />

        <input
          value={todo.description}
          onChange={updateTodo}
          name="description"
          type="text"
          placeholder="Enter Description"
        />

        <button className="iconButton" type="submit">
          <AddIcon />
        </button>
      </form>
    </div>
  );
}

export default InputTodoComponent;

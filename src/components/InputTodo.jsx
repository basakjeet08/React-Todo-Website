import { useState } from "react";
import CardComponent from "./Card";
import InputComponent from "./Input";
import AddIcon from "@mui/icons-material/Add";

// This is the default style for the Input Todo
const defaultStyle = {
  display: "flex",
  justifyContent: "center",
  padding: 8,
};

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

  const onSubmit = () => {
    onAddClick(todo);
    setTodo({
      title: "",
      description: "",
    });
  };

  // Returning the TODO Add component
  return (
    <div style={{ ...defaultStyle, ...style }}>
      <CardComponent style={{ flexDirection: "row", columnGap: 16 }}>
        <InputComponent
          value={todo.title}
          onChange={updateTodo}
          name="title"
          type="text"
          placeholder="Enter Title"
        />

        <InputComponent
          value={todo.description}
          onChange={updateTodo}
          name="description"
          type="text"
          placeholder="Enter Description"
        />

        <button className="iconButton" onClick={onSubmit}>
          <AddIcon />
        </button>
      </CardComponent>
    </div>
  );
}

export default InputTodoComponent;

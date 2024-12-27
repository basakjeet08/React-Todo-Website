import { useState } from "react";

function useInputTodo() {
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
  
  const resetTodo = () => {
    setTodo(() => {
      return {
        title: "",
        description: "",
      };
    });
  };

  const [checkpoint, setCheckpoint] = useState({ description: "" });

  const updateCheckpoint = (event) => {
    setCheckpoint({ description: event.target.value });
  };

  const resetCheckpoint = () => {
    setCheckpoint({ description: "" });
  };

  return {
    todo,
    updateTodo,
    resetTodo,
    checkpoint,
    updateCheckpoint,
    resetCheckpoint,
  };
}

export default useInputTodo;

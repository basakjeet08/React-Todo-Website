import { useState } from "react";
import InputTodoComponent from "../components/InputTodo";
import useTodo from "../hooks/useTodo";
import CheckpointUI from "../components/CheckpointUI/CheckpointUI";
import useInputTodo from "../hooks/useInputTodo";

function AddTodoPage() {
  // When the User Adds a Todo
  const [checkpointList, setList] = useState([]);
  const {
    todo,
    updateTodo,
    resetTodo,
    checkpoint,
    updateCheckpoint,
    resetCheckpoint,
  } = useInputTodo();

  const onAdd = () => {
    if (checkpoint.description === "") return;
    setList((prev) => [...prev, checkpoint]);
    resetCheckpoint();
  };

  const onDelete = (indexToDelete) => {
    setList((prev) => prev.filter((_, index) => index !== indexToDelete));
  };

  const { postTodo } = useTodo();

  const onSubmit = () => {
    todo.checkpoints = checkpointList;
    postTodo(todo);

    resetTodo();
    resetCheckpoint();
    setList([]);
  };

  return (
    <div className="auth-container">
      <div className="card" style={{ flexDirection: "row" }}>
        <InputTodoComponent
          todo={todo}
          updateTodo={updateTodo}
          checkpoint={checkpoint}
          updateCheckpoint={updateCheckpoint}
          resetCheckpoint={resetCheckpoint}
          onAddClick={onAdd}
        />
        <CheckpointUI
          checkpointList={checkpointList}
          deleteCheckpoint={onDelete}
          onSubmit={onSubmit}
        />
      </div>
    </div>
  );
}

export default AddTodoPage;

import AddIcon from "@mui/icons-material/Add";

function InputTodoComponent({
  todo,
  updateTodo,
  checkpoint,
  updateCheckpoint,
  onAddClick,
}) {
  const onSubmit = (event) => {
    event.preventDefault();
    onAddClick(checkpoint);
  };

  // Returning the TODO Add component
  return (
    <form onSubmit={onSubmit} className="card">
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

      <textarea
        value={checkpoint.description}
        type="text"
        placeholder="Enter Checkpoint"
        onChange={updateCheckpoint}
      />

      <button className="iconButton">
        <AddIcon />
      </button>
    </form>
  );
}

export default InputTodoComponent;

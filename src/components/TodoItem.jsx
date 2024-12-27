function TodoItemComponent({ todo, onDeleteClick, deleteCheckpoint }) {
  return (
    <div className="card" style={{ width: 350 }}>
      <p className="todo-title">{todo.title}</p>
      <p className="todo-description">{todo.description}</p>

      <div className="checkpoint-card card">
        <h2>Checkpoints</h2>
        <ul>
          {todo.checkpoints.map((checkpoint, index) => (
            <li
              key={checkpoint.id}
              className={checkpoint.status === "COMPLETED" ? "cut-text" : ""}
            >
              {checkpoint.description}
            </li>
          ))}
        </ul>
      </div>
      <button onClick={onDeleteClick}>Delete</button>
    </div>
  );
}

export default TodoItemComponent;

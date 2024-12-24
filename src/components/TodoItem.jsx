function TodoItemComponent({ todo, onDeleteClick }) {
  return (
    <div className="card" style={{ width: 350 }}>
      <p className="todo-title">{todo.title}</p>
      <p className="todo-description">{todo.description}</p>
      <button onClick={onDeleteClick}>Delete</button>
    </div>
  );
}

export default TodoItemComponent;

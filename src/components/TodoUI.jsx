import TodoItemComponent from "./TodoItem";

function TodoUIComponent({ todoList, onDelete }) {
  return (
    <div className="todo-list-container">
      {todoList.map((todo, index) => (
        <TodoItemComponent
          key={index}
          todo={todo}
          onDeleteClick={() => onDelete(index)}
        />
      ))}
    </div>
  );
}

export default TodoUIComponent;

import TodoItemComponent from "./TodoItem";

const defaultStyle = {
  display: "flex",
  flexWrap: "wrap",
  rowGap: 16,
  columnGap: 16,
  padding: 16,
};

function TodoUIComponent({ todoList, onDelete }) {
  return (
    <div style={defaultStyle}>
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

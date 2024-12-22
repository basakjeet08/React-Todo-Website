import todoList from "../utilities/Constants";
import TodoItemComponent from "./TodoItem";

const defaultStyle = {
  display: "flex",
  flexWrap: "wrap",
  rowGap: 16,
  columnGap: 16,
  padding: 16,
};

function TodoUIComponent() {
  return (
    <div style={defaultStyle}>
      {todoList.map((todo, index) => (
        <TodoItemComponent
          key={index}
          todo={todo}
          onDeleteClick={() => {
            console.log("Todo Object Delete Clicked : " + todo);
          }}
        />
      ))}
    </div>
  );
}

export default TodoUIComponent;

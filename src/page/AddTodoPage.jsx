import InputTodoComponent from "../components/InputTodo";
import { postTodo } from "../services/TodoService";

function AddTodoPage() {
  // When the User Adds a Todo
  const onAdd = (todo) => {
    if (todo.title === "") return;
    postTodo(todo);
  };

  return (
    <div style={{ flex: 1 }}>
      <InputTodoComponent onAddClick={onAdd} />
    </div>
  );
}

export default AddTodoPage;

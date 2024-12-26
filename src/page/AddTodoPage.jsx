import InputTodoComponent from "../components/InputTodo";
import useTodo from "../hooks/useTodo";

function AddTodoPage() {
  // When the User Adds a Todo
  const { postTodo } = useTodo();

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

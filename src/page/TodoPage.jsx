import InputTodoComponent from "../components/InputTodo";
import TodoUIComponent from "../components/TodoUI";
import { useEffect, useState } from "react";
import { deleteTodo, fetchUserTodo, postTodo } from "../services/TodoService";

function TodoPage() {
  // Todo List State
  const [todoState, setTodoState] = useState([]);

  const fetchData = () => {
    fetchUserTodo()
      .then((data) => setTodoState(data))
      .catch((error) => console.log(`Error Occured : ${error}`));
  };

  useEffect(() => fetchData(), []);

  // When the User Adds a Todo
  const onAdd = (todo) => {
    if (todo.title === "") return;
    postTodo(todo).then(() => fetchData());
  };

  // When we delete an todo List
  const onDelete = (indexToDelete) => {
    deleteTodo(todoState[indexToDelete].id)
      .then(() => fetchData())
      .catch((error) => console.log(error));
  };

  return (
    <>
      <header>
        <h1>Reactive Todos</h1>
      </header>

      <div style={{ flex: 1 }}>
        <InputTodoComponent onAddClick={onAdd} />
        <TodoUIComponent todoList={todoState} onDelete={onDelete} />
      </div>

      <footer>
        <p>Created with ❤️ and ☕ by Anirban Basak</p>
      </footer>
    </>
  );
}

export default TodoPage;

import InputTodoComponent from "../components/InputTodo";
import TodoUIComponent from "../components/TodoUI";
import { useEffect, useState } from "react";
import { fetchUserTodo, postTodo } from "../services/TodoService";

function TodoPage() {
  // Todo List State
  const [todoState, setTodoState] = useState([]);

  useEffect(() => {
    fetchUserTodo()
      .then((data) => setTodoState(data))
      .catch((error) => console.log(`Error Occured : ${error}`));
  }, []);

  // When the User Adds a Todo
  const onAdd = (todo) => {
    if (todo.title === "") return;
    postTodo(todo).then((data) => {
      setTodoState((prevTodoState) => [...prevTodoState, data]);
    });
  };

  // When we delete an todo List
  const onDelete = (indexToDelete) => {
    setTodoState((prevTodoState) => {
      return prevTodoState.filter((_todo, index) => index != indexToDelete);
    });
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

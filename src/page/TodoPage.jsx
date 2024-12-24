import InputTodoComponent from "../components/InputTodo";
import TodoUIComponent from "../components/TodoUI";
import todoList from "../utilities/Constants";
import { useState } from "react";

function TodoPage() {
  // Todo List State
  const [todoState, setTodoState] = useState(todoList);

  // When the User Adds a Todo
  const onAdd = (todo) => {
    if (todo.title === "") return;
    setTodoState((prevTodoState) => [...prevTodoState, todo]);
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

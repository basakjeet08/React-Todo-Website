import HeaderComponent from "../components/Header";
import FooterComponent from "../components/Footer";
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
      <HeaderComponent headerTitle="Reactive Todos" />
      <div style={{ flex: 1 }}>
        <InputTodoComponent onAddClick={onAdd} />
        <TodoUIComponent todoList={todoState} onDelete={onDelete} />
      </div>
      <FooterComponent />
    </>
  );
}

export default TodoPage;

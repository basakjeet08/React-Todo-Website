import HeaderComponent from "./Header";
import FooterComponent from "./Footer";
import InputTodoComponent from "./InputTodo";
import TodoUIComponent from "./TodoUI";
import todoList from "../utilities/Constants";
import { useState } from "react";

function App() {
  // Todo List State
  const [todoState, setTodoState] = useState(todoList);

  // When the User Adds a Todo
  const onAdd = (todo) => {
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

export default App;

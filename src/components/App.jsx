import HeaderComponent from "./Header";
import FooterComponent from "./Footer";
import InputTodoComponent from "./InputTodo";
import TodoUIComponent from "./TodoUI";

function App() {
  return (
    <>
      <HeaderComponent headerTitle="Reactive Todos" />
      <InputTodoComponent onAddClick={(todo) => console.log(todo)} />
      <TodoUIComponent />
      <FooterComponent />
    </>
  );
}

export default App;

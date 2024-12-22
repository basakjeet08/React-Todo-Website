import HeaderComponent from "./Header";
import FooterComponent from "./Footer";
import InputTodoComponent from "./InputTodo";

function App() {
  return (
    <>
      <HeaderComponent headerTitle="Reactive Todos" />
      <InputTodoComponent onAddClick={(todo) => console.log(todo)} />
      <FooterComponent />
    </>
  );
}

export default App;

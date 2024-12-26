import { useEffect, useState } from "react";
import { deleteTodo, fetchUserTodo } from "../services/TodoService";
import TodoItemComponent from "../components/TodoItem";

function ShowTodoPage() {
  // Todo List State
  const [todoState, setTodoState] = useState([]);

  const fetchData = () => {
    fetchUserTodo()
      .then((data) => setTodoState(data))
      .catch((error) => console.log(`Error Occured : ${error}`));
  };

  useEffect(() => fetchData(), []);

  // When we delete an todo List
  const onDelete = (indexToDelete) => {
    deleteTodo(todoState[indexToDelete].id)
      .then(() => fetchData())
      .catch((error) => console.log(error));
  };

  return (
    <div style={{ flex: 1 }}>
      <div className="todo-list-container">
        {todoState.map((todo, index) => (
          <TodoItemComponent
            key={index}
            todo={todo}
            onDeleteClick={() => onDelete(index)}
          />
        ))}
      </div>
    </div>
  );
}

export default ShowTodoPage;

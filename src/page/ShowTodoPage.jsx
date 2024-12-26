import { useEffect } from "react";
import TodoItemComponent from "../components/TodoItem";
import useFetchTodo from "../hooks/useFetchTodo";

function ShowTodoPage() {
  // Todo State
  const { data, fetchTodo, deleteTodoById } = useFetchTodo();

  useEffect(() => {
    fetchTodo();
  }, []);

  return (
    <div style={{ flex: 1 }}>
      <div className="todo-list-container">
        {data?.map((todo) => (
          <TodoItemComponent
            key={todo.id}
            todo={todo}
            onDeleteClick={() => deleteTodoById(todo.id)}
          />
        ))}
      </div>
    </div>
  );
}

export default ShowTodoPage;

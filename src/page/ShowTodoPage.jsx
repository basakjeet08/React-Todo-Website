import { useEffect } from "react";
import useTodo from "../hooks/useTodo";
import AddIcon from "@mui/icons-material/Add";
import { useState } from "react";
import Card from "../components/Card";
import TodoItem from "../components/TodoItem";
import TextArea from "../components/TextArea";
import PrimaryButton from "../components/PrimaryButton";

function ShowTodoPage() {
  // Todo State
  const [todoInput, setTodoInput] = useState({ description: "" });
  const { data, getTodo, postTodo, updateTodo, deleteTodo } = useTodo();

  const updateTodoInput = (newValue) => setTodoInput({ description: newValue });
  const onTodoSubmit = (event) => {
    event.preventDefault();
    if (!todoInput.description) return;
    postTodo(todoInput);
    updateTodoInput("");
  };

  useEffect(() => {
    getTodo();
  }, []);

  return (
    <div className="flex-1">
      <div className="flex flex-wrap gap-4 p-4">
        <div className="flex w-screen justify-center">
          <Card direction="flex-row">
            <TextArea
              type="text"
              value={todoInput.description}
              onChange={(event) => updateTodoInput(event.target.value)}
              placeholder="Enter New Todo to Add"
            />

            <PrimaryButton onClick={onTodoSubmit}>
              <AddIcon />
            </PrimaryButton>
          </Card>
        </div>

        {data?.map((todo) => (
          <TodoItem
            key={todo.id}
            todo={todo}
            onClick={() => deleteTodo(todo.id)}
            onCheck={updateTodo}
          />
        ))}
      </div>
    </div>
  );
}

export default ShowTodoPage;

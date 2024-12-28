import DeleteForever from "@mui/icons-material/Delete";
import PrimaryButton from "../components/PrimaryButton";

function TodoItem({ todo, onClick, onCheck }) {
  return (
    <div className="group flex flex-row items-center gap-4 rounded-lg p-5 bg-secondary transition-all duration-300 hover:shadow-xl w-[380px] hover:bg-primary">
      <input
        type="checkbox"
        checked={todo.isCompleted}
        onChange={(event) => onCheck(event.target.checked, todo.id)}
      />

      <p
        className={`flex-1 text-sm font-thin group-hover:text-text transition-all duration-300 ${
          todo.isCompleted && "line-through"
        }`}
      >
        {todo.description}
      </p>
      <PrimaryButton
        className="group-hover:bg-secondary group-hover:text-primary"
        onClick={onClick}
      >
        <DeleteForever />
      </PrimaryButton>
    </div>
  );
}

export default TodoItem;

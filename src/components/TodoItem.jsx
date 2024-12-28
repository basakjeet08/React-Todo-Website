import DeleteForever from "@mui/icons-material/Delete";
import PrimaryButton from "../components/PrimaryButton";

function TodoItem({ todo, onClick }) {
  return (
    <div className="group hover:bg-primary flex flex-row items-center justify-between gap-4 rounded-lg p-5 bg-secondary transition-all duration-300 hover:shadow-xl w-[350px]">
      <p
        className={`text-sm font-thin group-hover:text-text transition-all duration-300 ${
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

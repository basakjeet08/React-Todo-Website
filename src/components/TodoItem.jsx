import PrimaryButton from "./PrimaryButton";
import DeleteForever from "@mui/icons-material/Delete";

function TodoItem({ todo, onClick }) {
  return (
    <div className="flex flex-row items-center gap-4 rounded-lg p-5 bg-secondary transition-all duration-200 hover:shadow-xl w-[350px]">
      <p className="text-sm font-thin">{todo.description}</p>{" "}
      <PrimaryButton onClick={onClick}>
        <DeleteForever />
      </PrimaryButton>
    </div>
  );
}

export default TodoItem;

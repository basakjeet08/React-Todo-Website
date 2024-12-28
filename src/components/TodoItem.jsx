import DeleteForever from "@mui/icons-material/Delete";

function TodoItem({ todo, onClick }) {
  return (
    <div className="group hover:bg-primary flex flex-row items-center justify-between gap-4 rounded-lg p-5 bg-secondary transition-all duration-200 hover:shadow-xl w-[350px]">
      <p className="text-sm font-thin group-hover:text-text">
        {todo.description}
      </p>
      <button
        onClick={onClick}
        className="flex items-center justify-center p-3 border-none bg-primary rounded-md text-white cursor-pointer transition-all duration-300 hover:opacity-80 active:opacity-50 group-hover:bg-secondary group-hover:text-primary"
      >
        <DeleteForever />
      </button>
    </div>
  );
}

export default TodoItem;

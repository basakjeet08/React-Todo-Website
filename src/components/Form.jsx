function Form({ onSubmit, children }) {
  return (
    <form
      className="flex flex-col items-center gap-6 rounded-lg p-8"
      onSubmit={onSubmit}
    >
      {children}
    </form>
  );
}

export default Form;

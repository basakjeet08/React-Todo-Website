function SecondaryButton({ onClick, disabled, children }) {
  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className="flex items-center justify-center p-3 border-none bg-secondary rounded-md text-primary cursor-pointer transition-all duration-300 hover:opacity-80 active:opacity-50"
    >
      {children}
    </button>
  );
}

export default SecondaryButton;

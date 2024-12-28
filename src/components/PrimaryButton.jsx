function PrimaryButton({ onClick, disabled, className, children }) {
  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className={`flex items-center justify-center p-3 border-none bg-primary rounded-md text-white cursor-pointer transition-all duration-300 hover:opacity-80 active:opacity-50 ${className}`}
    >
      {children}
    </button>
  );
}

export default PrimaryButton;

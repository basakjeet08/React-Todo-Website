function PrimaryButton({
  onClick,
  disabled,
  bgColor = "primary",
  color = "secondary",
  children,
}) {
  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className={`flex items-center justify-center p-3 border-none bg-${bgColor} rounded-md text-${color} cursor-pointer transition-all duration-300 hover:opacity-80 active:opacity-50`}
    >
      {children}
    </button>
  );
}

export default PrimaryButton;

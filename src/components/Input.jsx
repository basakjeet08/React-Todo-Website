// This object defines the default style for the input Component
const defaultStyle = {
  padding: "12px 16px",
  fontSize: 16,
  fontFamily: "McLaren, cursive",
  border: "none",
  borderRadius: 6,
  borderBottom: "3px solid #f5ba13",
  outline: "none",
};

function InputComponent({
  value,
  onChange,
  className,
  style,
  name,
  type,
  placeholder,
}) {
  return (
    <input
      value={value}
      onChange={(event) => onChange(event.target.value)}
      className={className}
      name={name}
      style={{ ...defaultStyle, ...style }}
      type={type}
      placeholder={placeholder}
    />
  );
}

export default InputComponent;

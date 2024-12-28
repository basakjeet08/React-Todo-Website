function Input({ value, onChange, name, type, placeholder, autoComplete }) {
  return (
    <input
      className="py-3 px-4 text-base rounded-md border-b-2 border-b-primary outline-none"
      value={value}
      onChange={onChange}
      name={name}
      type={type}
      placeholder={placeholder}
      autoComplete={autoComplete}
    />
  );
}

export default Input;

function TextArea({ value, onChange, type, placeholder }) {
  return (
    <textarea
      className="py-3 px-4 text-base rounded-md bg-primary outline-none resize-none text-text placeholder-text max-h-16 w-[500px] max-w-full"
      value={value}
      onChange={onChange}
      type={type}
      placeholder={placeholder}
    />
  );
}

export default TextArea;

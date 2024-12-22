import { useState } from "react";

// This is the default styling for the Button
const defaultStyle = {
  padding: "12px 24px",
  borderRadius: 6,
  border: "none",
  backgroundColor: " #f5ba13",
  fontFamily: "McLaren, cursive",
  color: "white",
  transition: "all 0.25s",
};

function ButtonComponent({ buttonText, onClick, className, style }) {
  const [isHovering, setIsHovering] = useState(false);
  const [isActive, setIsActive] = useState(false);

  // For the Button Animations
  defaultStyle.opacity = isActive ? 0.5 : isHovering ? 0.8 : 1;

  return (
    <button
      onClick={onClick}
      className={className}
      style={{ ...defaultStyle, ...style }}
      onMouseEnter={() => setIsHovering(true)}
      onMouseLeave={() => setIsHovering(false)}
      onMouseDown={() => setIsActive(true)}
      onMouseUp={() => setIsActive(false)}
    >
      {buttonText}
    </button>
  );
}

export default ButtonComponent;

import { useState } from "react";

// This is the Default Styles for the Card
const defaultStyle = {
  display: "inline-flex",
  flexDirection: "column",
  alignItems: "center",
  rowGap: 16,
  borderRadius: 8,
  padding: 16,
  backgroundColor: " #FFFFFF",
  float: "left",
  transition: "all .25s",
};

function CardComponent({ style, children }) {
  const [isHovered, setIsHovered] = useState(false);

  const animationStyle = {
    boxShadow: isHovered ? "1px 3px 20px #ccc" : "1px 3px 5px #ccc",
  };

  return (
    <div
      style={{ ...defaultStyle, ...style, ...animationStyle }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {children}
    </div>
  );
}

export default CardComponent;

import CardComponent from "./Card";
import ButtonComponent from "./Button";

// This is the common style which is used for both the Title and Description
const commonStyle = {
  fontFamily: "McLaren, cursive",
  textAlign: "center",
  cursor: "default",
};

// Default Title Style
const titleStyle = {
  ...commonStyle,
  fontSize: 18,
  fontWeight: 700,
};

// Default Description Style
const descriptionStyle = {
  ...commonStyle,
  fontSize: 14,
  fontWeight: 100,
};

function TodoItemComponent({ todo, onDeleteClick }) {
  return (
    <CardComponent style={{ width: 350 }}>
      <p style={titleStyle}>{todo.title}</p>
      <p style={descriptionStyle}>{todo.description}</p>
      <ButtonComponent onClick={onDeleteClick}>Delete</ButtonComponent>
    </CardComponent>
  );
}

export default TodoItemComponent;

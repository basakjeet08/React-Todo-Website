// This is the Style for the Header Element
const headerStyle = {
  backgroundColor: "#f5ba13",
  padding: "16px 32px",
  display: "flex",
  justifyContent: "center",
  boxShadow: "0 0 10px 0 rgba(0, 0, 0, 0.3)",
};

// This is the Style for the heading 1 Element
const headingStyle = {
  color: "#FFF",
  fontFamily: "McLaren, cursive",
  fontWeight: 200,
};

function HeaderComponent({ headerTitle }) {
  return (
    <header style={headerStyle}>
      <h1 style={headingStyle}>{headerTitle}</h1>
    </header>
  );
}

export default HeaderComponent;

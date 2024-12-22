// Footer Style Object in Javascript
const defaultStyle = {
  textAlign: "center",
  width: "100%",
  padding: 16,
  backgroundColor: "#f5ba13",
  color: "white",
  boxShadow: "0 0 10px 0 rgba(0, 0, 0, 0.3)",
};

function FooterComponent() {
  return (
    <footer style={defaultStyle}>
      <p>Created with ❤️ and ☕ by Anirban Basak</p>
    </footer>
  );
}

export default FooterComponent;

// Footer Style Object in Javascript
const footerStyle = {
  position: "absolute",
  textAlign: "center",
  bottom: 0,
  width: "100%",
  padding: 16,
};

// Paragraph Style object inside footer
const paragraphStyle = {
  color: "#979595",
};

function FooterComponent() {
  return (
    <footer style={footerStyle}>
      <p style={paragraphStyle}>Created with ❤️ and ☕ - Anirban Basak</p>
    </footer>
  );
}

export default FooterComponent;

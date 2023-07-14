import { propTypes } from "react-bootstrap/esm/Image";

const Header = ({ text, bgColor, textColor }) => {
  const headerColor = {
    backgroundColor: bgColor,
    color: textColor,
  };
  return (
    <header style={headerColor}>
      <div className="container">
        <h2>{text}</h2>
      </div>
    </header>
  );
};

Header.defaultProps = {
  text: "Feedback UI",
  bgColor: "rgba(0, 0, 0, 0.4)",
  textColor: "#ff6a95 ",
};
Header.protoTypes = { text: propTypes.string };

export default Header;

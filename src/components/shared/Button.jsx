import PropTypes from "prop-types";
const Button = ({ children, type, version, isDisabled }) => {
  return (
    <button type={type} disabled={isDisabled} className={`btn btn-${version}`}>
      {children}
    </button>
  );
};

Button.defaultProps = {
  type: "submit",
  version: "primary",
  isDisabled: false,
};

Button.prototype = {
  children: PropTypes.node.isRequired,
  type: PropTypes.string,
  version: PropTypes.string,
  isDisabled: PropTypes.bool,
};
export default Button;

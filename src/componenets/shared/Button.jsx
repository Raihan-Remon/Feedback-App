import PropTypes from "prop-types";
const Button = ({ children, version, type, isDisabled }) => {
  return (
    <button type={type} className={`btn btn-${version}`} disabled={isDisabled}>
      {children}
    </button>
  );
};

Button.defaultProps = {
  type: "submit",
  version: "primary",
  isDisabled: false,
};

Button.propTypes = {
  children: PropTypes.node.isRequired,
  type: PropTypes.string,
  version: PropTypes.string,
  isDisabled: PropTypes.bool,
};

export default Button;

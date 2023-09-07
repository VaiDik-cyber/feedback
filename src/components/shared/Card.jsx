import PropTypes from "prop-types";
import React from "react";

const Card = ({ children, reverse, handleClick }) => {
  return (
    // <div className={`card ${reverse && "reverse"}`}>
    <div
      className="card"
      style={{
        backgroundColor: reverse ? "rgba(0,0,0,0.4)" : "#fff",
        color: reverse ? "#fff" : "#000",
      }}
    >
      {children}
    </div>
    // </div>
  );
};

Card.defaultProps = {
  reverse: false,
};

Card.propTypes = {
  children: PropTypes.node.isRequired,
  reverse: PropTypes.bool,
};

export default Card;

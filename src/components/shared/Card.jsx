import PropTypes from "prop-types";
import React from "react";

const Card = ({ children, reverse }) => {
  return (
    // <div className={`card ${reverse && "reverse"}`}>
    <div
      className="card"
      style={{
        backgroundColor: reverse ? "rgba(0,0,0,0.4)" : "#fff",
        color: reverse ? "#fff" : "#000",
      }}
    >
      <div className="num-display">{children.rating}</div>
      <div className="text-display">{children.text}</div>
    </div>
    // </div>
  );
};

Card.defaultProps = {
  reverse: false,
};

Card.propTypes = {
  children: PropTypes.object.isRequired,
  reverse: PropTypes.bool,
};

export default Card;

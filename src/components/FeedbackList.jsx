import PropTypes from "prop-types";
import React from "react";
import FeedbackItems from "./FeedbackItems";

const FeedbackList = ({ feedback, deleteClick }) => {
  if (!feedback || feedback.length === 0) {
    return <p>No Feedback Yet</p>;
  }
  //   console.log(feedback);

  return (
    <div className="feedback-list">
      {feedback.map((item) => (
        <FeedbackItems key={item.id} item={item} deleteClick={deleteClick} />
      ))}
    </div>
  );
};
FeedbackList.prototype = {
  feedback: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      text: PropTypes.string.isRequired,
      rating: PropTypes.number.isRequired,
    })
  ),
};
export default FeedbackList;

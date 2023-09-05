import React from "react";
import FeedbackItems from "./FeedbackItems";

const FeedbackList = ({ feedback }) => {
  if (!feedback || feedback.length === 0) {
    return <p>No Feedback Yet</p>;
  }
  //   console.log(feedback);
  return (
    <div className="feedback-list">
      {feedback.map((item) => (
        <FeedbackItems key={item.id} item={item} />
      ))}
    </div>
  );
};

export default FeedbackList;

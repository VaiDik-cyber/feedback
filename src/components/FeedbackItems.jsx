import React, { useState } from "react";

function FeedbackItems() {
  const [rating, setRating] = useState(7);
  const [text, setText] = useState("This is an example of a feedback item");
  const handleClick = () => {
    setText(`You have ${rating + 1} Messages`);
    setRating((prev) => {
      return prev + 1;
    });
  };
  return (
    <div className="card">
      <div className="num-display">{rating}</div>
      <div className="text-display">{text}</div>
      <button onClick={handleClick}>click</button>
    </div>
  );
}

export default FeedbackItems;

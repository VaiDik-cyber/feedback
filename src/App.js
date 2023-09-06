import { useState } from "react";
import Header from "./components/Header";
import FeedbackData from "./data/FeedbackData";
import FeedbackList from "./components/FeedbackList";

function App() {
  const [feedback, setFeedback] = useState(FeedbackData);
  // console.log(feedback);
  const deleteFeedback = (id) => {
    // console.log("APP", id);
    if (window.confirm("Are You sure you want to Delete Feedback?")) {
      setFeedback(feedback.filter((item) => item.id !== id));
    }
  };
  return (
    <>
      <Header></Header>

      <div className="container">
        <FeedbackList feedback={feedback} deleteClick={deleteFeedback} />
      </div>
    </>
  );
}

export default App;

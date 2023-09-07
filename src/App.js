import { useState } from "react";
import Header from "./components/Header";
import FeedbackData from "./data/FeedbackData";
import FeedbackList from "./components/FeedbackList";
import FeedbackStats from "./components/FeedbackStats";
import FeedbackForm from "./components/FeedbackForm";

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
        <FeedbackForm />
        <FeedbackStats feedback={feedback}></FeedbackStats>
        <FeedbackList feedback={feedback} deleteClick={deleteFeedback} />
      </div>
    </>
  );
}

export default App;

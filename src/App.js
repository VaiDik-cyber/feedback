import { v4 as uuidv4 } from "uuid";
import { useState } from "react";
import {FeedbackProvider} from './context/FeedbackContext'
import Header from "./components/Header";
import FeedbackData from "./data/FeedbackData";
import FeedbackList from "./components/FeedbackList";
import FeedbackStats from "./components/FeedbackStats";
import FeedbackForm from "./components/FeedbackForm";
import AboutPages from "./Pages/AboutPages";
import { BrowserRouter as Router, Route,Routes } from "react-router-dom";
import AboutIconLink from "./components/AboutIconLink";

function App() {
  const [feedback, setFeedback] = useState(FeedbackData);
  // console.log(feedback);
  const deleteFeedback = (id) => {
    // console.log("APP", id);
    if (window.confirm("Are You sure you want to Delete Feedback?")) {
      setFeedback(
        feedback.filter((item) => {
          console.log(item.id);
          // console.log(id);
          return item.id !== id;
        })
      );
    }
  };

  const addFeedback = (newFeedback) => {
    newFeedback.id = uuidv4();
    setFeedback([newFeedback, ...feedback]);
  };
  return (
    <FeedbackProvider>
    <Router>
      <Header></Header>

      <div className="container">
      <Routes>
        <Route exact path="/" element={<>
          <FeedbackForm handleAdd={addFeedback} />
        <FeedbackStats feedback={feedback}></FeedbackStats>
        <FeedbackList feedback={feedback} deleteClick={deleteFeedback} />
        </>}/>
        
        {/* <Route path="/about" Component={AboutPages}/> */}
        
        <Route path="/about" element={<AboutPages/>}/>
        </Routes>
        <AboutIconLink/>
      </div>
    </Router>
    </FeedbackProvider>
  );
}

export default App;

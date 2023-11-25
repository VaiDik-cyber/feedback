import {FeedbackProvider} from './context/FeedbackContext'
import Header from "./components/Header";
import FeedbackList from "./components/FeedbackList";
import FeedbackStats from "./components/FeedbackStats";
import FeedbackForm from "./components/FeedbackForm";
import AboutPages from "./Pages/AboutPages";
import { BrowserRouter as Router, Route,Routes } from "react-router-dom";
import AboutIconLink from "./components/AboutIconLink";

function App() {

  return (
    <FeedbackProvider>
    <Router>
      <Header></Header>

      <div className="container">
      <Routes>
        <Route exact path="/" element={<>
          <FeedbackForm />
        <FeedbackStats ></FeedbackStats>
        <FeedbackList />
        </>}/>
        
        
        <Route path="/about" element={<AboutPages/>}/>
        </Routes>
        <AboutIconLink/>
      </div>
    </Router>
    </FeedbackProvider>
  );
}

export default App;

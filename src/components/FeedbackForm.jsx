import { useEffect, useState } from "react";
import Card from "./shared/Card";
import { useContext } from "react";
import FeedbackContext from "../context/FeedbackContext";
import Button from "./shared/Button";
import RatingSelect from "./RatingSelect";


const FeedbackForm = () => {
  const {addFeedback,feedbackEdit,updateFeedback} = useContext(FeedbackContext);
  const [text, setText] = useState("");
  const [message, setMessage] = useState("");
  const [btnDisabled, setBtnDisabled] = useState(true);
  const [rating, setRating] = useState(10);

  useEffect(()=>{
    if(feedbackEdit.edit === true){
      setText(feedbackEdit.item.text);
      setRating(feedbackEdit.item.rating);
      setBtnDisabled(false);
    }
  },[feedbackEdit]);

  const handleTextChange = (e) => {
    if (text === "") {
      setBtnDisabled(true);
      setMessage(null);
    } else if (text !== "" && text.trim().length <= 10) {
      setBtnDisabled(true);
      setMessage("Text must be atleast 10 characters long.");
    } else {
      setBtnDisabled(false);
      setMessage(null);
    }
    setText(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (text.trim().length > 10) {
      const newFeedback = {
        text,
        rating,
      };
      if(feedbackEdit.edit === true){
        updateFeedback(feedbackEdit.item.id,newFeedback)
      }else{
        addFeedback(newFeedback);
      }
      
      setText("");
    }
  };
  return (
    <Card>
      <form onSubmit={handleSubmit}>
        <h2>How would you rate your service with us</h2>
        <RatingSelect
          select={(rating) => {
            setRating(rating);
          }}
        />
        <div className="input-group">
          <input
            type="text"
            placeholder="Write a review"
            onChange={handleTextChange}
            value={text}
          />
          <Button type="submit" version="secondary" isDisabled={btnDisabled}>
            Send
          </Button>
        </div>
        {message && <div className="message">{message}</div>}
      </form>
    </Card>
  );
};

export default FeedbackForm;

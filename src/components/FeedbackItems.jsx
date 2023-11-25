import { FaTimes,FaEdit } from "react-icons/fa";
import { useContext } from "react";
import FeedbackContext from "../context/FeedbackContext";
import PropTypes from "prop-types";
import Card from "./shared/Card";

function FeedbackItems({ item }) {
  const { deleteFeedback, editFeedback } = useContext(FeedbackContext);

  const handleClick = () => {
    deleteFeedback(item.id);
  };
  return (
    <Card children={item}>
      <div className="num-display">{item.rating}</div>
      <button onClick={handleClick} className="close">
        <FaTimes color="purple"></FaTimes>
      </button>
      <button onClick={()=>{editFeedback(item)}} className="edit">
        <FaEdit color="purple"/>
      </button>
      <div className="text-display">{item.text}</div>
    </Card>
  );
}
FeedbackItems.prototype = {
  item: PropTypes.object.isRequired,
};
export default FeedbackItems;

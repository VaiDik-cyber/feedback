import { FaTimes } from "react-icons/fa";
import PropTypes from "prop-types";
import Card from "./shared/Card";

function FeedbackItems({ item, deleteClick }) {
  return (
    <Card
      children={item}
      handleClick={() => {
        deleteClick(item.id);
      }}
    >
      <div className="num-display">{item.rating}</div>
      <button onClick={deleteClick} className="close">
        <FaTimes color="purple"></FaTimes>
      </button>
      <div className="text-display">{item.text}</div>
    </Card>
  );
}
FeedbackItems.prototype = {
  item: PropTypes.object.isRequired,
};
export default FeedbackItems;

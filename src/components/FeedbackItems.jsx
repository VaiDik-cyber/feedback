import PropTypes from "prop-types";
import Card from "./shared/Card";

function FeedbackItems({ item, deleteClick }) {
  return (
    <Card
      children={item}
      handleClick={() => {
        deleteClick(item.id);
      }}
    ></Card>
  );
}
FeedbackItems.prototype = {
  item: PropTypes.object.isRequired,
};
export default FeedbackItems;

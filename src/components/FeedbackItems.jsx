import PropTypes from "prop-types";
import Card from "./shared/Card";

function FeedbackItems({ item }) {
  return <Card children={item} reverse={true}></Card>;
}
FeedbackItems.prototype = {
  item: PropTypes.object.isRequired,
};
export default FeedbackItems;

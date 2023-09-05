import FeedbackItems from "./components/FeedbackItems";
import Header from "./components/Header";

function App() {
  return (
    <>
      <Header></Header>

      <div className="container">
        <FeedbackItems />
      </div>
    </>
  );
}

export default App;

import faker from "faker";
import CommentDetail from "./components/CommentDetail";
import ApprovalCard from "./components/ApprovalCard";
import "./style/App.css";

function App() {
  return (
    <div className="App">
      <div className="ui container comments">
        <ApprovalCard>
          <CommentDetail
            author="Sam"
            date="Today at 11:00AM"
            text="Nice blog post!"
            photo={faker.image.image()}
          />
        </ApprovalCard>

        <ApprovalCard>
          <CommentDetail
            author="Alex"
            date="Today at 3:00PM"
            text="I totally agree!"
            photo={faker.image.image()}
          />
        </ApprovalCard>
        <ApprovalCard>
          <CommentDetail
            author="Jane"
            date="Today at 8:00PM"
            text="Thanks for sharing!"
            photo={faker.image.image()}
          />
        </ApprovalCard>
      </div>
    </div>
  );
}

export default App;

// npm install faker@5.5.3
// <img alt="avatar" src={faker.image.image()} />

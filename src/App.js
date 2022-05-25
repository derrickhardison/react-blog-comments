import faker from "faker";
import CommentDetail from "./components/CommentDetail";

function App() {
  return (
    <div className="App">
      <div className="ui container comments">
        <CommentDetail
          author="Sam"
          date="Today at 11:00AM"
          text="Nice blog post!"
          photo={faker.image.image()}
        />
        <CommentDetail
          author="Alex"
          date="Today at 3:00PM"
          text="I totally agree!"
          photo={faker.image.image()}
        />
        <CommentDetail
          author="Jane"
          date="Today at 8:00PM"
          text="Thanks for sharing!"
          photo={faker.image.image()}
        />
      </div>
    </div>
  );
}

export default App;

// npm install faker@5.5.3
// <img alt="avatar" src={faker.image.image()} />

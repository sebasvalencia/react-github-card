import React from "react";
import "./App.css";

class App extends React.Component {
  render() {
    const testData = [
      {
        name: "Dan Abramov",
        avatar_url: "https://avatars0.githubusercontent.com/u/810438?v=4",
        company: "@facebook"
      },
      {
        name: "Sophie Alpert",
        avatar_url: "https://avatars2.githubusercontent.com/u/6820?v=4",
        company: "Humu"
      },
      {
        name: "Sebastian Markbåge",
        avatar_url: "https://avatars2.githubusercontent.com/u/63648?v=4",
        company: "Facebook"
      }
    ];

    return (
      <div className="App">
        <header className="App-header">The Github Card App</header>

        <div className="github-profile">
          <img src={testData[0].avatar_url} />
          <div className="info">
            <div className="name">{testData[0].name}</div>
            <div className="company">{testData[0].company}</div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;

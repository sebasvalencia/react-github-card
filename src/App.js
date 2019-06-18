import React from "react";
import "./App.css";
import Card from "./Card";
import CardList from "./CardList";

class App extends React.Component {
  

   testData = [
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

  state = {
    profiles: this.testData
  }

  render() {
    
    return (
      <div className="App">
        <header className="App-header">The Github Card App</header>

        <CardList testData={this.state.profiles} />
      </div>
    );
  }
}

export default App;

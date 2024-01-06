import React, { Component } from "react";
import "./App.css";
import { CardList } from "./components/card-list/card-list.component";
class App extends Component {
  constructor() {
    super();
    this.state = {
      monster: [],
    };
  }

  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((users) => this.setState({ monster: users }));
  }
  render() {
    return (
      <>
        {/* <h1>Hello world</h1> */}

        <CardList name="jaydip">
          {this.state.monster.map((monster) => (
            <h1 key={monster.id}>{monster.name}</h1>
          ))}
        </CardList>

        {/* <h3>create app with vite </h3>  */}
      </>
    );
  }
}

export default App;

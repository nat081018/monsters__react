import React, { Component } from "react";
import ReactDOM from "react-dom";
import "./App.css";
import Card__list from "./components/card__list/Card__list.jsx";
import Search from "./components/search/Search.jsx";

class App extends Component {
  constructor(props) {
    super(props);
  }
  state = {
    monsters: [],
    search: "",
  };

  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/users/")
      .then((response) => response.json())
      .then((users) => this.setState({ monsters: users }));
  }

  searthMonster = (e) =>
    this.setState({
      search: e.target.value,
    });

  render() {
    const { monsters, search } = this.state;
    const filterMomsters = monsters.filter((monster) =>
      monster.name.toLowerCase().includes(search.toLowerCase())
    );
    return (
      <div className="App">
        <Search searthMonster={this.searthMonster} />
        <Card__list monsters={filterMomsters} />
      </div>
    );
  }
}

export default App;

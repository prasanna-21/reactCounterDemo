import "./App.css";
import Navbar from "./components/navbar";
import Counters from "./components/counters";
import React, { Component } from "react";
// import reactDom from "react-dom";

class App extends Component {
  state = {
    counters: [
      { id: 0, value: 0 },
      { id: 1, value: 1 },
      { id: 2, value: 2 },
    ],
  };

  constructor() {
    super();
    console.log("App-constructor");
  }
  handleIncreament = (counter) => {
    console.log("increamnet event hanleded");
    let counters = [...this.state.counters];
    console.log(counters);
    let index = counters.indexOf(counter);
    counters[index].value++;

    this.setState({ counters: counters });
  };

  handleDecreament = (counter) => {
    console.log("increamnet event hanleded");
    let counters = [...this.state.counters];
    console.log(counters);
    let index = counters.indexOf(counter);
    counters[index].value--;

    this.setState({ counters: counters });
  };

  handleReset = () => {
    let counters = this.state.counters.map((c) => {
      c.value = 0;
      return c;
    });
    this.setState({ counters: counters });
  };
  handleDelete = (counterId) => {
    let countersArr = this.state.counters.filter((c) => c.id !== counterId);
    this.setState({ counters: countersArr });
  };
  componentDidMount() {
    console.log("App-mounted");
  }
  render() {
    console.log("App-rendered");
    return (
      <React.Fragment>
        <Navbar
          totalCounters={this.state.counters.filter((c) => c.value > 0).length}
        />
        <main className="container">
          <Counters
            counters={this.state.counters}
            onReset={this.handleReset}
            onIncreament={this.handleIncreament}
            onDecreament={this.handleDecreament}
            onDelete={this.handleDelete}
          />
        </main>
      </React.Fragment>
    );
  }
}

export default App;

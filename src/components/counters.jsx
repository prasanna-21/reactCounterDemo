import React, { Component } from "react";
import Counter from "./counter";
// import App from "../App";

class Counters extends Component {
  render() {
    console.log("Counters-rendered");
    const {
      onReset,
      counters,
      onDelete,
      onIncreament,
      onDecreament,
    } = this.props;
    return (
      <div>
        <button onClick={onReset} className="btn btn-primary bt-sm m-2">
          Reset
        </button>
        {counters.map((counter) => (
          <Counter
            key={counter.id}
            // onDelete={() => this.handleDelete(counter.id)}
            onIncreament={onIncreament}
            onDecreament={onDecreament}
            onDelete={onDelete}
            // value={counter.value}
            // id={counter.id}

            counter={counter}
          >
            <h5>Counter # {counter.id}</h5>
          </Counter>
        ))}
      </div>
    );
  }
}

export default Counters;

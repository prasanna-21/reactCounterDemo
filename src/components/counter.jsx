import React, { Component } from "react";

class Counter extends Component {
  //remove local data
  // state = {
  //   count: this.props.value,
  // };
  // console.log(this);
  //bind method return this object
  // this.handleIncreament = this.handleIncreament.bind(this);

  // handleIncreament = () => {
  //   // console.log("increament button cliked", this);

  //   this.setState({ count: this.state.count + 1 });
  // };

  componentDidUpdate() {
    console.log("counter-updated");
  }
  componentWillUnmount() {
    console.log("counter-unmounted");
  }
  render() {
    // let classes = this.getClasses();

    // console.log("properties", this.props);
    console.log("Counter-rendered");
    return (
      <div className="row">
        <div className="col-1">
          <span className={this.getClasses()} style={{ fontSize: 20 }}>
            {this.findCount()}
          </span>
        </div>
        <div className="col">
          <button
            onClick={() => this.props.onIncreament(this.props.counter)}
            className="btn btn-secondary bt-sm "
          >
            +
          </button>
          <button
            onClick={() => this.props.onDecreament(this.props.counter)}
            className="btn btn-secondary bt-sm m-2 "
            disabled={this.props.counter.value === 0 ? "disabled" : ""}
          >
            -
          </button>
          <button
            onClick={() => this.props.onDelete(this.props.counter.id)}
            className="btn btn-danger bt-sm "
          >
            delete
          </button>
        </div>
      </div>
    );
  }
  getClasses() {
    let classes = "badge m-2 badge";
    classes += this.props.counter.value === 0 ? "-warning" : "-primary";
    return classes;
  }

  findCount() {
    //object destructering
    const { value } = this.props.counter;
    // const ele = <h3>Zero</h3>;
    return value === 0 ? "zero" : value;
  }
}

export default Counter;

import React, { Component } from "react";
import Counter from "./counter";

class Counters extends Component {
  state = {
    counters: [
      { id: 1, value: 0 },
      { id: 2, value: 0 },
      { id: 3, value: 0 },
      { id: 4, value: 0 },
    ],
  };
  // handleReset = () => {
  //   const counters = this.state.counters.map((c) => {
  //     c.value = 0;
  //     return c;
  //   });
  //   this.setState({ counters });
  // };
  handleDelete = (counterId) => {
    const counters = this.state.counters.filter((c) => c.id !== counterId);
    this.setState({ counters });
  };
  render() {
    return (
      <React.Fragment>
        {/* <button
          onClick={this.handleReset}
          className="btn btn-sm btn-primary m-2"
        >
          {" "}
          Reset{" "}
        </button> */}
        {this.state.counters.map((counter) => {
          return (
            <Counter
              key={counter.id}
              counter={counter}
              onDelete={this.handleDelete}
            >
              <h4>Counter #{counter.id}</h4>
            </Counter>
          );
        })}
      </React.Fragment>
    );
  }
}

export default Counters;

import React, { Component } from "react";
import Counter from "./counter";

class Counters extends Component {
  render() {
    const { onDelete, onIncrement, onReset } = this.props;
    return (
      <React.Fragment>
        <button onClick={onReset} className="btn btn-sm btn-primary m-2">
          Reset
        </button>
        {this.props.counters.map((counter) => {
          return (
            <Counter
              key={counter.id}
              onIncrement={onIncrement}
              onDelete={onDelete}
              counter={counter}
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

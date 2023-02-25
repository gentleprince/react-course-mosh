import React, { Component } from "react";

class Counter extends Component {
  render() {
    return (
      <div>
        <h4>{this.props.id}</h4>
        {this.props.counter.children}
        <span className={this.getBadgeClasses()}>{this.getValue()}</span>
        <button
          onClick={() => this.props.onIncrement(this.props.counter)}
          className="btn btn-secondary btn-small"
        >
          Increase
        </button>
        <button
          onClick={() => this.props.onDelete(this.props.counter.id)}
          className="btn btn-sm btn-danger m-2"
        >
          Delete
        </button>
      </div>
    );
  }

  getBadgeClasses() {
    let classes = "fw-bold text-light m-2 p-1 rounded bg-";
    classes += this.props.counter.value === 0 ? "warning" : "primary";
    return classes;
  }

  getValue() {
    let { value } = this.props.counter;
    return value === 0 ? "Zero" : value;
  }
}

export default Counter;

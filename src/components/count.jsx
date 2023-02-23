import React, { Component } from "react";

class Count extends Component {
  state = {
    count: 0,
    items: ["item1", "item2", "item3"],
  };
  styles = {
    fontSize: 15,
    fontWeight: "bold",
  };
  renderTags() {
    if (this.state.items.length === 0) return <p>There are no items!</p>;

    return (
      <ul>
        {this.state.items.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
    );
  }
  // constructor(){
  // super();
  // this.handleIncrement= this.handleIncrement.bind(this)
  // }
  handleIncrement = (product) => {
    console.log(product);
    this.setState({ count: this.state.count + 1 });
  };
  render() {
    return (
      <React.Fragment>
        <span style={this.styles} className={this.getBadgeClasses()}>
          {this.formatCount()}
        </span>
        <button
          onClick={() => this.handleIncrement({ id: 1 counter})}
          className="btn btn-secondary btn-sm"
        >
          Increment
        </button>
        {this.state.items.length === 0 && "Please create a new item!"}
        {this.renderTags()}
      </React.Fragment>
    );
  }

  getBadgeClasses() {
    let classes = "text-light m-2 p-1 rounded bg-";
    classes += this.state.count === 0 ? "warning" : "primary";
    return classes;
  }

  formatCount() {
    const { count } = this.state;
    return count === 0 ? "Zero" : count;
  }
}
export default Count;

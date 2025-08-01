import { Component } from "react";
import React from "react";

class IncDecClass extends Component {
  constructor(props) {
    super(props);
    this.state = { count: 0 };
  }

  increment = () => {
    this.setState({ count: this.state.count + 1 });
  };

  decrement = () => {
    if(this.state.count > 0){
      this.setState({ count: this.state.count - 1 });
    }
  };

  render() {
    return (
      <div>
        <h1>Class Counter: {this.state.count}</h1>
        <button class="btn btn-primary" onClick={this.increment}>Increment</button>
        <button class="btn btn-danger" onClick={this.decrement}>Decrement</button>
      </div>
    );
  }
}
export default IncDecClass;
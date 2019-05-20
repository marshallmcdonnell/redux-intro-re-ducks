import React from 'react';
import { connect } from 'react-redux';

class Counter extends React.Component {
  increment = () => {
    this.props.dispatch({ type: "INCREMENT"});
  };

  decrement = () => {
    this.props.dispatch({ type: "DECREMENT"});
  };

  resetCounter = () => {
    this.props.dispatch({ type: "RESET"});
  }

  render() {
    return (
      <div>
        <h1>Counter</h1>
        <div>
          <button onClick={this.decrement}>-</button>
          <span>{this.props.count}</span>
          <button onClick={this.increment}>+</button>
          <button onClick={this.resetCounter}>RESET</button>
        </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    count: state.count
  };
}

// `connect` is a "higher-order function"
//  Which means: `connect(mapStateToProps) -> returns a function, say F,
//               which then takes `Counter` as an arg => calling F(Counter)

export default connect(mapStateToProps)(Counter);

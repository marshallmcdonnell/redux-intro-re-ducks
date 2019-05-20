import React from 'react';
import types from '../../state/ducks/counter/types'

class Counter extends React.Component {
    increment = () => {
      this.props.dispatch({ type: types.INCREMENT });
    }
  
    decrement = () => {
      this.props.dispatch({ type: types.DECREMENT });
    }
  
    render() {
      return (
        <div>
          <h2>Counter</h2>
          <div>
            <button onClick={this.decrement}>-</button>
            <span>{this.props.count}</span>
            <button onClick={this.increment}>+</button>
          </div>
        </div>
      )
    }
  }

  export default Counter;
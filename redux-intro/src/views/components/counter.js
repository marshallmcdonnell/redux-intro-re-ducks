import React from 'react';

const  Counter = ({
  onIncrement,
  onDecrement,
  onReset,
  value,
}) => {
  return (
    <div>
      <h1>Counter</h1>
      <div>
        <span>{this.props.count}</span>
        <button onClick={onDecrement}>-</button>
        <button onClick={onIncrement}>+</button>
        <button onClick={onReset}>RESET</button>
      </div>
    </div>
  )
}

export default Counter;
import { combineReducers } from "redux";
import types from "./types";

// 
function incrementCounter(counterState, action) {return counterState + 1}
function decrementCounter(counterState, action) {return counterState - 1}
  
// reducer
function counterReducer(counterState = 0, action) {
    switch(action.type) {
      case types.INCREMENT:
        return incrementCounter(counterState, action)
      case types.DECREMENT:
        return decrementCounter(counterState, action)
      default:
        return counterState;
    }
}

const reducer = combineReducers( {
    count: counterReducer
} );

export default reducer;
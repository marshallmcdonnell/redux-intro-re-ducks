import React from 'react';
import {Provider} from 'react-redux';
import Counter from './components/Counter';

import { createStore } from 'redux';

// Initialize the state of our App for Redux (required for bootstrap part of app)
const initialState = {
    count: 0
}

// Create reducer to return the state to the Redux store
function reducer(state = initialState, action) {
    console.log('reducer', state, action);

    switch(action.type) {
        case 'INCREMENT':
            return {
                count: state.count + 1
            };
        case 'DECREMENT':
            return {
                count: state.count - 1
            };
        case 'RESET':
            return {
                count: 0
            };
        default:
            return state;
    }
}

// Setup Redux store
const store = createStore(reducer);
store.dispatch({ type: "INCREMENT"});
store.dispatch({ type: "INCREMENT"});
store.dispatch({ type: "DECREMENT"});
store.dispatch({ type: "RESET"});

class App extends React.Component {
  render() {
      return(
          <Provider store={store}>
              <Counter />
          </Provider>
      )
  }
}

export default App;
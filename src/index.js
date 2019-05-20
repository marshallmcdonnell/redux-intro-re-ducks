import React from 'react';
import { render } from 'react-dom';
import CounterContainer from './views/containers/counter';
import { Provider } from 'react-redux';

import configureStore from './state/store';

const initialState = {
  counterState: {
    count: 2
  }
}
const store = configureStore(initialState);


const App = () => (
  <Provider store={store}>
    <CounterContainer/>
  </Provider>
);

render(<App />, document.getElementById('root'));


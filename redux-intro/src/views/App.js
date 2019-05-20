import React, { Component } from "react";
import Counter from "./components/counter";

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <h2>Welcome to React re-ducks Counter</h2>
        </div>
        <Counter />
      </div>
    );
  }
}

export default App;

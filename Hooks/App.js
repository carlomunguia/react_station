import React, { Component } from "react";
import CounterHooks from "./CounterHooks";
import Toggler from "./Toggler";

class App extends Component {
  render() {
    return (
      <div className="App">
        <CounterHooks />
      </div>
    );
  }
}

export default App;

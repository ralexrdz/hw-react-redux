import React, { Component } from 'react';
import './App.css';

import Counter from './Counter';
import PlusMinusOne from './PlusMinusOne';
import PlusMinusX from './PlusMinusX';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Counter />
        <PlusMinusOne />
        <PlusMinusX />
      </div>
    )
  }
}

export default App;

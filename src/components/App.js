import React, { Component } from 'react';
import Display from './Display';
import ButtonPanel from './ButtonPanel';
import calcuate from '../logic/calculate';
import '../styles/App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      total: null,
      next: null,
      operation: null,
      toDisplay: '0',
    };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(buttonName) {
    const data = calcuate(this.state, buttonName);
    this.setState(data);
  }

  render() {
    const { toDisplay } = this.state;
    return (
      <div className="app">
        <h1>React Calculator</h1>
        <Display solution={toDisplay} />
        <ButtonPanel clickHandler={this.handleClick} />
      </div>
    );
  }
}

export default App;

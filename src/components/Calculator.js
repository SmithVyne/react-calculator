import React, { Component } from 'react';
import Display from './Display';
import ButtonPanel from './ButtonPanel';
import calcuate from '../logic/calculate';
import '../styles/Calculator.css';

class Calculator extends Component {
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
      <>
        <div className="calcuText">{'Let\'s do some math!'}</div>
        <div className="app">
          <Display solution={toDisplay} />
          <ButtonPanel clickHandler={this.handleClick} />
        </div>
      </>
    );
  }
}

export default Calculator;

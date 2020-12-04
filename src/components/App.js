import React, { Component } from 'react';
import '../styles/App.css';
import Display from './Display';
import ButtonPanel from './ButtonPanel';
import calcuate from '../logic/calculate';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      total: null,
      next: null,
      operation: null,
    };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(buttonName) {
    const data = calcuate(this.state, buttonName);
    this.setState(data);
  }

  render() {
    const { total, next } = this.state;
    return (
      <>
        <Display total={total} next={next} />
        <ButtonPanel clickHandler={this.handleClick} />
      </>
    );
  }
}

export default App;

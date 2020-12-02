import '../styles/App.css';
import Display from './Display';
import ButtonPanel from './ButtonPanel';
import calcuate from '../logic/calculate';

class App {
  constructor() {
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
    return (
      <>
        <Display solution="34" />
        <ButtonPanel />
      </>
    );
  }
}

export default App;

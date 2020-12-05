import Big from 'big.js';
import operate from './operate';

const calculate = (calcData, buttonName) => {
  const muteData = { ...calcData };

  if (buttonName === '=') {
    if (muteData.total && muteData.next && muteData.operation) {
      muteData.total = operate(muteData);
    }
    muteData.next = null;
    muteData.operation = null;
    muteData.toDisplay = muteData.total;
  } else if (['+', '-', 'x', '÷'].includes(buttonName)) {
    if (muteData.next) {
      muteData.total = muteData.next;
      muteData.next = null;
    }
    muteData.operation = buttonName;
    muteData.toDisplay = buttonName;
  } else if (['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', '.'].includes(buttonName)) {
    if (muteData.next) {
      muteData.next += buttonName;
    } else {
      muteData.next = buttonName;
    }
    muteData.toDisplay = muteData.next;
  } else if (buttonName === '%' && muteData.next) {
    const input = new Big(muteData.next);
    muteData.total = input.div(100).toString();
    muteData.next = null;
    muteData.toDisplay = muteData.total;
  } else if (buttonName === '+/-' && muteData.next) {
    const input = new Big(muteData.next);
    muteData.total = input.times(-1).toString();
    muteData.next = null;
    muteData.toDisplay = muteData.total;
  } else if (buttonName === 'AC') {
    muteData.total = null;
    muteData.next = null;
    muteData.operation = null;
    muteData.toDisplay = '0';
  }

  return muteData;
};

export default calculate;

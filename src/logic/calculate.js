import operate from './operate';

const calculate = (calcData, buttonName) => {
  const muteData = { ...calcData };

  if (buttonName === '=') {
    muteData.total = operate(muteData);
    muteData.next = null;
  } else if (['+', '-', 'x', '÷'].includes(buttonName) && muteData.next) {
    if (!muteData.total) {
      muteData.total = muteData.next;
      muteData.next = null;
    }
    muteData.operation = buttonName;
  } else if (['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'].includes(buttonName)) {
    if (muteData.next) {
      muteData.next += buttonName;
    } else {
      muteData.next = buttonName;
    }
  } else if (['%', '+/-'].includes(buttonName)) {
    muteData.operation = buttonName;
    muteData.total = operate(muteData);
    muteData.next = null;
  } else if (buttonName === 'AC') {
    muteData.total = null;
    muteData.next = null;
    muteData.operation = null;
  }

  return muteData;
};

export default calculate;

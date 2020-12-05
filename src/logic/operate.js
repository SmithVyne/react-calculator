import Big from 'big.js';

const operate = ({ total: numberOne, next: numberTwo, operation }) => {
  let result;
  const inputA = new Big(numberOne);
  const inputB = new Big(numberTwo);

  if (operation === '+') {
    result = inputA.plus(inputB);
  } else if (operation === '-') {
    result = inputA.minus(inputB);
  } else if (operation === 'x') {
    result = inputA.times(inputB);
  } else if (operation === '÷') {
    result = inputA.div(inputB);
  } else {
    result = 0;
  }

  return result.toString();
};

export default operate;

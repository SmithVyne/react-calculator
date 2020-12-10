import calculate from '../logic/calculate';

describe('it receives a state object and buttonName and perfoms calculations', () => {
  const data = {
    total: '5',
    next: '6',
    operation: null,
    toDisplay: '0',
  };

  it('it adds two numbers', () => {
    data.operation = '+';

    const result = calculate(data, '=').toDisplay;
    expect(result).toEqual('11');
  });

  it('it subtracts two numbers', () => {
    data.operation = '-';

    const result = calculate(data, '=').toDisplay;
    expect(result).toEqual('-1');
  });

  it('it multiplies numbers', () => {
    data.operation = 'x';

    const result = calculate(data, '=').toDisplay;
    expect(result).toEqual('30');
  });

  it('it performs divisions', () => {
    data.operation = '÷';

    let result = calculate(data, '=').toDisplay;
    result = Number.parseFloat(result).toPrecision(2);
    expect(result).toEqual('0.83');
  });
});

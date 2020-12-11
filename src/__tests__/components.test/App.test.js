import { render, fireEvent } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import App from '../../components/App';

describe('it displays the website', () => {
  it('it has a logo "MATH MAGICIANS"', () => {
    const { getByText } = render(
      <BrowserRouter>
        <App />
      </BrowserRouter>,
    );
    getByText('Math Magicians');
  });

  it('it has navigation links in the nav-bar', () => {
    const { getByRole, getByText } = render(
      <BrowserRouter>
        <App />
      </BrowserRouter>,
    );
    const nav = getByRole('navigation');
    const home = getByText('Home');
    const calculator = getByText('Calculator');
    const quote = getByText('Quote');

    expect(nav).toContainElement(home);
    expect(nav).toContainElement(calculator);
    expect(nav).toContainElement(quote);
  });

  it('it updates the dom when home is clicked', () => {
    const { getByRole, getByText } = render(
      <BrowserRouter>
        <App />
      </BrowserRouter>,
    );

    fireEvent.click(getByText('Home'));
    expect(getByRole('main')).toMatchSnapshot();
  });

  it('it updates the dom when calculator is clicked', () => {
    const { getByRole, getByText } = render(
      <BrowserRouter>
        <App />
      </BrowserRouter>,
    );

    fireEvent.click(getByText('Calculator'));
    expect(getByRole('main')).toMatchSnapshot();
  });
});

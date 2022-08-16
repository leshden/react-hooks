import {render, screen} from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Header from './Header';
import {ThemeContextProvider} from '../../contexts/theme-context/ThemeContext';

describe('Header component', () => {
  test('render', () => {
    render(
      <ThemeContextProvider>
        <Header />
      </ThemeContextProvider>
    );
    const  header = screen.getByRole('banner');
    expect(header).toBeInTheDocument();
  });

  test('has title text', () => {
    render(
      <ThemeContextProvider>
        <Header />
      </ThemeContextProvider>
    );
    const  text = screen.getByRole('heading');
    expect(text).toBeInTheDocument();
  });
})

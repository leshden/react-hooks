import {render, screen} from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Header from './Header';
import {ThemeContextProvider} from '../../contexts/theme-context/ThemeContext';
import {convertHexToRGBA} from '../../utils/Utils';

test('render Header', () => {
  render(
    <ThemeContextProvider>
      <Header />
    </ThemeContextProvider>
  );
  const  header = screen.getByRole('banner');
  expect(header).toBeInTheDocument();
});

test('Header has title text', () => {
  render(
    <ThemeContextProvider>
      <Header />
    </ThemeContextProvider>
  );
  const  text = screen.getByRole('heading');
  expect(text).toBeInTheDocument();
});

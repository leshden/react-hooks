import {render, screen} from '@testing-library/react';
import Header from './Header';

test('render Header', () => {
  render(<Header />);
  const  text = screen.getByText(/hooks/i);
  expect(text).toBeInTheDocument();
});

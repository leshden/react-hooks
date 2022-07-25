import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

test('check header', () => {
  render(<App />);
  const linkElement = screen.getByRole('banner');
  expect(linkElement).toBeInTheDocument();
});

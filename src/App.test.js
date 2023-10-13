import React from 'react';
import { render } from '@testing-library/react';
import App from './App';

test('renders App with main element', () => {
  const { container } = render(<App />);
  expect(container.querySelector('main')).toBeInTheDocument();
});

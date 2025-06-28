import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import App from '../src/App';
import '@testing-library/jest-dom';

test('Login functionality works correctly', () => {
  render(<App />);

  // Login
  fireEvent.change(screen.getByPlaceholderText('Email'), {
    target: { value: 'admin@example.com' },
  });
  fireEvent.change(screen.getByPlaceholderText('Password'), {
    target: { value: 'password123' },
  });
  fireEvent.click(screen.getByText('Login'));

  expect(screen.getByText('Welcome, Admin')).toBeInTheDocument();
});

import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import App from '../src/App';
import '@testing-library/jest-dom';

test('FAQ - Create, List, Delete, and Logout works', () => {
  render(<App />);

  // Login first
  fireEvent.change(screen.getByPlaceholderText('Email'), {
    target: { value: 'admin@example.com' },
  });
  fireEvent.change(screen.getByPlaceholderText('Password'), {
    target: { value: 'password123' },
  });
  fireEvent.click(screen.getByText('Login'));
  expect(screen.getByText('Welcome, Admin')).toBeInTheDocument();

  // Create FAQ
  fireEvent.change(screen.getByPlaceholderText('Enter question'), {
    target: { value: 'What is React?' },
  });
  fireEvent.change(screen.getByPlaceholderText('Enter answer'), {
    target: { value: 'React is a JS library for building UI.' },
  });
  fireEvent.click(screen.getByText('Add FAQ'));

  // List FAQ
  expect(screen.getByText('FAQ List')).toBeInTheDocument();
  const faqItem = screen.getByText('What is React?').closest('li');
  expect(faqItem).toHaveTextContent('React is a JS library for building UI.');

  // Delete FAQ
  fireEvent.click(screen.getByText('Delete'));
  expect(screen.queryByText('What is React?')).not.toBeInTheDocument();

  // Logout
  fireEvent.click(screen.getByText('Logout'));
  expect(screen.getByText('Login')).toBeInTheDocument();
});

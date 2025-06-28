import React from 'react'; // ✅ Required for JSX
import { render, screen, fireEvent } from '@testing-library/react';
import App from './App';
import '@testing-library/jest-dom';

test('E2E - Login, Create FAQ, List, Delete, Logout', () => {
  render(<App />);

  // ✅ Login
  fireEvent.change(screen.getByPlaceholderText('Email'), {
    target: { value: 'admin@example.com' },
  });
  fireEvent.change(screen.getByPlaceholderText('Password'), {
    target: { value: 'password123' },
  });
  fireEvent.click(screen.getByText('Login'));

  expect(screen.getByText('Welcome, Admin')).toBeInTheDocument();

  // ✅ Create FAQ
  fireEvent.change(screen.getByPlaceholderText('Enter question'), {
    target: { value: 'What is React?' },
  });
  fireEvent.change(screen.getByPlaceholderText('Enter answer'), {
    target: { value: 'React is a JS library for building UI.' },
  });
  fireEvent.click(screen.getByText('Add FAQ'));

  // ✅ List FAQ
  expect(screen.getByText('FAQ List')).toBeInTheDocument();

  const faqItem = screen.getByText('What is React?').closest('li');
  expect(faqItem).toHaveTextContent('React is a JS library for building UI.');

  // ✅ Delete FAQ
  fireEvent.click(screen.getByText('Delete'));
  expect(screen.queryByText('What is React?')).not.toBeInTheDocument();

  // ✅ Logout
  fireEvent.click(screen.getByText('Logout'));
  expect(screen.getByText('Login')).toBeInTheDocument();
});


// test('renders and logs in', () => {
//   render(<App />);
//   expect(screen.getByPlaceholderText(/email/i)).toBeInTheDocument();
// });

import React from 'react';
import App from '../../src/App';
import { mount } from 'cypress/react';

describe('App Component', () => {
  it('renders login page', () => {
    mount(<App />);
    cy.get('input[placeholder="Email"]').should('exist');
  });
});

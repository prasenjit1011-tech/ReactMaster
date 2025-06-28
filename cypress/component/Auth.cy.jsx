import React from 'react';
import App from '../../src/App';
import { mount } from 'cypress/react';

describe('Component Login Test', () => {
  it('logs in and logs out', () => {
    mount(<App />);
    cy.get('input[placeholder="Email"]').type('admin@example.com');
    cy.get('input[placeholder="Password"]').type('password123');

    cy.contains('Login').invoke('css', 'background-color', 'yellow').wait(10000);
    cy.contains('Login').click();

    cy.contains('Welcome, Admin').should('exist').wait(5000);
    cy.contains('Logout').click();
    
    cy.contains('Login').should('exist');
  });
});

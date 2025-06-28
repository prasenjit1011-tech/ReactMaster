import React from 'react';
import App from '../../src/App';
import { mount } from 'cypress/react';


describe('FAQ CRUD Test', () => {
  it('logs in and logs out', () => {
    mount(<App />);
    cy.get('input[placeholder="Email"]').type('admin@example.com');
    cy.get('input[placeholder="Password"]').type('password123');

    cy.contains('Login').invoke('css', 'background-color', 'yellow').wait(2000);
    cy.contains('Login').click();




/**************************************************** */

    // ✅ Create FAQ
    cy.get('input[placeholder="Enter question"]').type('What is React?');
    cy.get('input[placeholder="Enter answer"]').type('React is a JS library for building UI.');

    cy.contains('Add FAQ').invoke('css', 'background-color', 'lightgreen').wait(5000);
    cy.contains('Add FAQ').click();

    // ✅ Verify FAQ added
    cy.contains('FAQ List').should('exist');
    cy.contains('What is React?').should('exist');
    cy.contains('React is a JS library for building UI.').should('exist');

    // ✅ Delete FAQ
    cy.contains('Delete').invoke('css', 'background-color', 'tomato').wait(10000);
    cy.contains('Delete').click();    
    cy.contains('What is React?').should('not.exist');




/**************************************************** */

    cy.contains('Welcome, Admin').should('exist').wait(2000);
    cy.contains('Logout').click();
    
    cy.contains('Login').should('exist');
  });
});

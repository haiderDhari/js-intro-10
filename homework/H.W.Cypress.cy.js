/// <reference types="cypress" />

describe("Cypress Selectors", () => {
    beforeEach(() => {
      cy.visit("https://www.techglobal-training.com/frontend/form-elements");
    });
    it('Test Case 01 - Validate the Contact Us information', () => {
        
        cy.get('.is-size-3')
        .should('be.visible')
        .and('have.text', 'Contact Us!');
    });
});
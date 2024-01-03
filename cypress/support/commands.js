// cypress/support/commands.js

Cypress.Commands.add('fillMandatoryFieldsAndSubmit', () => {
    // Preenche os campos obrigatórios
    cy.get('#firstName').type('SeuNome');
    cy.get('#lastName').type('SeuSobrenome');
    cy.get('#email').type('seuemail@example.com');
    cy.get('#phone').type('123456789');
    cy.get('#open-text-area').type('Mensagem de teste para ajuda.');
  
    // Clica no botão Enviar
    cy.contains('button','Enviar').click();
  });
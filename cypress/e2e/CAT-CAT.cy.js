/// <reference types="Cypress" />

describe('Central de Atendimento ao Cliente TAT', () => {

  // Código a ser executado antes de cada teste
  beforeEach(() => {
    cy.visit('./src/index.html');
  })

  it('verifica o título da aplicação', () => {
    cy.title().should('eq', 'Central de Atendimento ao Cliente TAT');
  })

  // Exercicio
  it('preenche os campos obrigatórios e envia o formulário', () => {
    
    // Preenche os campos obrigatórios
    cy.get('#firstName').type('SeuNome');
    cy.get('#lastName').type('SeuSobrenome');
    cy.get('#email').type('seuemail@example.com');
    cy.get('#open-text-area').type('Mensagem de teste para ajuda.');

    // Marca a opção de contato preferencial
    cy.get('#email-checkbox').check();

    // Clica no botão Enviar
    cy.get('.button[type="submit"]').click();

    // Verifica se a mensagem de sucesso está visível
    cy.get('.success').should('be.visible');
  });



});
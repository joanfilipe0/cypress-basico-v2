/// <reference types="Cypress" />

// const { delay } = require("cypress/types/bluebird");

describe('Central de Atendimento ao Cliente TAT', () => {

  // Código a ser executado antes de cada teste
  beforeEach(() => {
    cy.visit('./src/index.html');
  })

  it('Verifica o título da aplicação', () => {
    cy.title().should('eq', 'Central de Atendimento ao Cliente TAT');
  })

  // Exercicio
  it('Preenche os campos obrigatórios e envia o formulário', () => {
    
    // Criando variável de texto longa para testes de type com delay ( Exercício Extra 01 )
    const longtext = 'Texto longo para testes Texto longo para testes Texto longo para testes Texto longo para testes Texto longo para testes Texto longo para testes'

    // Preenche os campos obrigatórios
    cy.get('#firstName').type('SeuNome');
    cy.get('#lastName').type('SeuSobrenome');
    cy.get('#email').type('seuemail@example.com');
    cy.get('#open-text-area').type(longtext, { delay: 0 });

    // Marca a opção de contato preferencial
    cy.get('#email-checkbox').check();

    // Clica no botão Enviar
    cy.get('.button[type="submit"]').click();

    // Verifica se a mensagem de sucesso está visível
    cy.get('.success').should('be.visible');
  });



});
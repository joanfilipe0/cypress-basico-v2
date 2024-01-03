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

  // Exercício Extra 02
  it('Exibe mensagem de erro ao submeter o formulário com um email com formatação inválida', () => {

    // Preenche os campos obrigatórios
    cy.get('#firstName').type('SeuNome');
    cy.get('#lastName').type('SeuSobrenome');

    // Insira um email com formatação inválida
    cy.get('#email').type('email_invalido');

    // Preenche outros campos
    cy.get('#open-text-area').type('Mensagem de teste para ajuda.');

    // Clica no botão Enviar
    cy.get('.button[type="submit"]').click();

    // Verifica se a mensagem de erro está visível
    cy.get('.error').should('be.visible');
  });

  // Exercício Extra 03
  it('Campo de telefone permanece vazio ao digitar valor não-numérico', () => {

    // Insira um valor não-numérico no campo de telefone
    cy.get('#phone').type('abcdefghij');

    // Verifica se o campo de telefone está vazio
    cy.get('#phone').should('have.value', '');
  });

  // Exercício Extra 04
  it('Exibe mensagem de erro quando o telefone se torna obrigatório mas não é preenchido', () => {

    // Preenche outros campos obrigatórios
    cy.get('#firstName').type('SeuNome');
    cy.get('#lastName').type('SeuSobrenome');
    cy.get('#email').type('seuemail@example.com');
    cy.get('#open-text-area').type('Mensagem de teste para ajuda.');

    // Marca a opção de contato preferencial ( Telefone Obrigatório )
    cy.get('#phone-checkbox').check();

    // Clica no botão Enviar
    cy.get('.button[type="submit"]').click();

    // Verifica se a mensagem de erro está visível para o campo de telefone
    cy.get('.error').should('be.visible');
  });

  // Exercício Extra 05
  it('preenche e limpa os campos nome, sobrenome, email e telefone', () => {
 
    // Preenche os campos
    cy.get('#firstName').type('SeuNome').should('have.value', 'SeuNome');
    cy.get('#lastName').type('SeuSobrenome').should('have.value', 'SeuSobrenome');
    cy.get('#email').type('seuemail@example.com').should('have.value', 'seuemail@example.com');
    cy.get('#phone').type('123456789').should('have.value', '123456789');

    // Limpa os campos e verifica se estão vazios
    cy.get('#firstName').clear().should('have.value', '');
    cy.get('#lastName').clear().should('have.value', '');
    cy.get('#email').clear().should('have.value', '');
    cy.get('#phone').clear().should('have.value', '');
  });


});
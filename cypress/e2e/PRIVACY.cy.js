describe('Central de Atendimento ao Cliente TAT ( Aula 07 )', () => {

    // Código a ser executado antes de cada teste
    beforeEach(() => {
      cy.visit('./src/privacy.html');
    })

    // Exercício Extra 2
    it.only('testa a página da política de privacidade de forma independente', () => {

      cy.contains('Talking About Testing').should('be.visible')
    });
  
  });
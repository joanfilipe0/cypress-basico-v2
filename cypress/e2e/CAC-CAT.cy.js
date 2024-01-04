/// <reference types="Cypress" />

// const { delay } = require("cypress/types/bluebird");

describe('Central de Atendimento ao Cliente TAT ( Aula 02 )', () => {

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
    cy.contains('button', 'Enviar').click();

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
    cy.contains('button', 'Enviar').click();

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
    cy.contains('button', 'Enviar').click();

    // Verifica se a mensagem de erro está visível para o campo de telefone
    cy.get('.error').should('be.visible');
  });

  // Exercício Extra 05
  it('Preenche e limpa os campos nome, sobrenome, email e telefone', () => {

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

  // Exercício Extra 06
  it('Exibe mensagem de erro ao submeter o formulário sem preencher os campos obrigatórios', () => {

    // Clica no botão Enviar
    cy.contains('button', 'Enviar').click();

    // Verifica se a mensagem de erro está visível para o campo de telefone
    cy.get('.error').should('be.visible');
  });

  // Exercício Extra 07
  it('Envia o formulário com sucesso usando um comando customizado', () => {

    // Preenche os campos obrigatórios e envia o formulário usando o comando customizado
    cy.fillMandatoryFieldsAndSubmit();

    // Verifica se a mensagem de sucesso está visível
    cy.get('.success').should('be.visible');
  });

});

describe('Central de Atendimento ao Cliente TAT ( Aula 03 )', () => {

  // Código a ser executado antes de cada teste
  beforeEach(() => {
    cy.visit('./src/index.html');
  })

  // Exercício
  it('Seleciona um produto (YouTube) por seu texto', () => {

    // Selecionar o produto "YouTube" pelo texto
    cy.get('#product').select('YouTube');

    // Verificar se a opção foi realmente selecionada
    cy.get('#product').should('have.value', 'youtube');
  });

  // Exercício Extra 01
  it('Seleciona um produto (Mentoria) por seu texto', () => {

    // Selecionar o produto "Mentoria" pelo texto
    cy.get('#product').select('Mentoria');

    // Verificar se a opção foi realmente selecionada
    cy.get('#product').should('have.value', 'mentoria');
  });

  // Exercício Extra 02
  it('Seleciona um produto (Blog) por seu índice', () => {

    // Selecionar o produto "Blog" pelo seu índice
    cy.get('#product').select(1);

    // Verificar se a opção foi realmente selecionada
    cy.get('#product').should('have.value', 'blog');
  });


});

describe('Central de Atendimento ao Cliente TAT ( Aula 04 )', () => {

  // Código a ser executado antes de cada teste
  beforeEach(() => {
    cy.visit('./src/index.html');
  })

  // Exercício
  it('Marca o tipo de atendimento como "Feedback"', () => {

    // Marcar o tipo de atendimento como "Feedback"
    cy.get('input[value="feedback"]').check();

    // Verificar se o valor foi realmente selecionado
    cy.get('input[value="feedback"]').should('be.checked');
  });

  // Exercício Extra 01
  it('Marca cada tipo de atendimento', () => {

    // Marcar cada tipo de atendimento e Verifica se cada radio foi marcado corretamente
    cy.get('input[type="radio"]')
      .should('have.length', 3)
      .each(function ($radio) {
        cy.wrap($radio).check();
        cy.wrap($radio).should('be.checked');
      });
  });

});

describe('Central de Atendimento ao Cliente TAT ( Aula 05 )', () => {

  // Código a ser executado antes de cada teste
  beforeEach(() => {
    cy.visit('./src/index.html');
  })

  // Exercício
  it('Marca ambos checkboxes, depois desmarca o último', () => {

    // Marcar ambos checkboxes , desmarca o último e verifica se está desmarcado
    cy.get('input[type ="checkbox"]')
      .check()
      .should('be.checked')
      .last()
      .uncheck()
      .should('not.be.checked');

  });

  // Exercício Extra 01
  it('Exibe mensagem de erro quando o telefone se torna obrigatório mas não é preenchido antes do envio do formulário', () => {

    // Preenche outros campos obrigatórios
    cy.get('#firstName').type('SeuNome');
    cy.get('#lastName').type('SeuSobrenome');
    cy.get('#email').type('seuemail@example.com');
    cy.get('#open-text-area').type('Mensagem de teste para ajuda.');

    // Marcar ambos checkboxes , desmarca o último e verifica se está desmarcado
    cy.get('input[type ="checkbox"]')
      .check()
      .should('be.checked');

    // Clica no botão Enviar
    cy.contains('button', 'Enviar').click();

    // Verifica se a mensagem de erro está visível para o campo de telefone
    cy.get('.error').should('be.visible');
  });

});

describe('Central de Atendimento ao Cliente TAT ( Aula 06 )', () => {

  // Código a ser executado antes de cada teste
  beforeEach(() => {
    cy.visit('./src/index.html');
  })

  // Exercício
  it('Seleciona o arquivo example.json da pasta fixtures', () => {

    cy.get('input[type="file"]')
      .should('not.have.value')
      .selectFile('./cypress/fixtures/example.json')
      .should(function ($input) {
        expect($input[0].files[0].name).to.equal('example.json')
      })
  });

  // Exercício Extra 1 ( Drag-Drop Simula o clicar e arrastar )
  it('Seleciona o arquivo example.json da pasta fixtures com drag-drop', () => {

    cy.get('input[type="file"]')
      .should('not.have.value')
      .selectFile('./cypress/fixtures/example.json', { action: 'drag-drop' })
      .should(function ($input) {
        expect($input[0].files[0].name).to.equal('example.json')
      })
  });

  // Exercício Extra 2 
  it('Seleciona um arquivo utilizando uma fixture para a qual foi dada um alias', () => {

    cy.fixture('example.json').as('sampleFile');
    cy.get('input[type="file"]')
      .should('not.have.value')
      .selectFile('@sampleFile')
      .should(function ($input) {
        expect($input[0].files[0].name).to.equal('example.json')
      })
  });

});

describe('Central de Atendimento ao Cliente TAT ( Aula 07 )', () => {

  // Código a ser executado antes de cada teste
  beforeEach(() => {
    cy.visit('./src/index.html');
  })

  // Exercício
  it('Verifica que a política de privacidade abre em outra aba sem a necessidade de um clique', () => {

    cy.get('#privacy a').should('have.attr', 'target', '_blank')

  });

  // Exercício Extra 2
  it('Acessa a página da política de privacidade removendo o target e então clicando no link', () => {

    cy.get('#privacy a')
      .invoke('removeAttr', 'target')
      .click()

    cy.contains('Talking About Testing').should('be.visible')
  });

});


describe('Central de Atendimento ao Cliente TAT ( Aula 11 )', () => {

  // Código a ser executado antes de cada teste
  beforeEach(() => {
    cy.visit('./src/index.html');
  })

  // Exercício
  it('Avançando no tempo para testes ( Testando o Desaparecimento da Mensagem pós 3 segundos', () => {
    cy.clock() // congela o relógio do navegador

    // Preenche os campos obrigatórios e envia o formulário usando o comando customizado
    cy.fillMandatoryFieldsAndSubmit();

    // Verifica se a mensagem de sucesso está visível
    cy.get('.success').should('be.visible');
    cy.tick(3000) // avança o relógio três segundos (em milissegundos). Avanço este tempo para não perdê-lo esperando.

    cy.get('.success').should('not.be.visible');
  })

  // Exercício Extra 1 - Rodando o Mesmo Testes Várias Vezes
  Cypress._.times(3, () => {
    it('Avançando no tempo para testes ( Testando o Desaparecimento da Mensagem pós 3 segundos', () => {
      cy.clock() // congela o relógio do navegador

      // Preenche os campos obrigatórios e envia o formulário usando o comando customizado
      cy.fillMandatoryFieldsAndSubmit();

      // Verifica se a mensagem de sucesso está visível
      cy.get('.success').should('be.visible');
      cy.tick(3000) // avança o relógio três segundos (em milissegundos). Avanço este tempo para não perdê-lo esperando.

      cy.get('.success').should('not.be.visible');
    })
  })

  // Exercício Extra 2
  it('Exibindo e Escondendo Mensagens com .invoke', () => {

    cy.get('.success')
      .should('not.be.visible')
      .invoke('show')
      .should('be.visible')
      .and('contain', 'Mensagem enviada com sucesso.')
      .invoke('hide')
      .should('not.be.visible')
    cy.get('.error')
      .should('not.be.visible')
      .invoke('show')
      .should('be.visible')
      .and('contain', 'Valide os campos obrigatórios!')
      .invoke('hide')
      .should('not.be.visible')
  })

  // Exercicio Extra 3
  it('Preenche a área de texto usando o comando invoke', () => {

    // Criando variável de texto longa para testes de type com delay
    const longtext = Cypress._.repeat('Teste Teste', 20)

    // Preenche o Campo de Texto e Verifica se Preenchido
    cy.get('#open-text-area')
      .invoke('val', longtext)
      .should('have.value', longtext)

  });

  // Exercicio Extra 4
  it('Realizando uma requisição http', () => {

    cy.request('https://cac-tat.s3.eu-central-1.amazonaws.com/index.html')
      .should((response) => {
        const { status, statusText , body } = response

        expect(status).to.equal(200)
        expect(statusText).to.equal('OK')
        expect(body).to.include('CAC TAT')
      })

  });

});

describe('Central de Atendimento ao Cliente TAT ( Aula 12 )', () => {

  // Código a ser executado antes de cada teste
  beforeEach(() => {
    cy.visit('./src/index.html');
  })

  // Verificando se Existe um Gato Na Página
  it('Encontra o Gato Escondido 🐈', () => {

    cy.request('https://cac-tat.s3.eu-central-1.amazonaws.com/index.html')
      .should((response) => {
        const { body } = response
        expect(body).to.include('🐈')
      })

  });

  // Mostrando e Verificando o Gato Aparecendo
  it('Encontra o Gato Escondido 🐈', () => {

    cy.get('#cat')
      .invoke('show')
      .should('be.visible')

  });

});
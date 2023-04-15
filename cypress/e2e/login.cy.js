/// <reference types="cypress" />

//const { afterEach } = require("mocha");
const perfil = require('../fixtures/perfil.json')

context ('funcionalidade login', () => {

    beforeEach(() => {
        cy.visit('http://lojaebac.ebaconline.art.br/minha-conta')
    });

    afterEach(() => {
        cy.screenshot()
    });

    it('deve fazer login com sucesso', () => {
  //    cy.get('.icon-user-unfollow').click()
        cy.get('#username').type('aluno_ebac@teste.com')
        cy.get('#password').type('teste@teste.com')
        cy.get('.woocommerce-form > .button').click()
        cy.get('a > .hidden-xs').should('contain', 'Welcome Aluno')
    })

    it('deve fazer login com sucesso - usando arquivo de dados', () => {
          //    cy.get('.icon-user-unfollow').click()
          cy.get('#username').type(perfil.usuario)
          cy.get('#password').type(perfil.senha)
          cy.get('.woocommerce-form > .button').click()
          cy.get('a > .hidden-xs').should('contain', 'Welcome Aluno')
    });

    it('deve fazer login com sucesso usando fixture', () => {
        cy.fixture('perfil').then(dados => {
    //    cy.get('.icon-user-unfollow').click()
          cy.get('#username').type(dados.usuario)
          cy.get('#password').type(dados.senha, {log: false})
          cy.get('.woocommerce-form > .button').click()
          cy.get('a > .hidden-xs').should('contain', 'Welcome Aluno')
        });
    
    });

    it('deve exibir uma mensagem de erro ao inserir usuario invalido', () => {
//      cy.get('.icon-user-unfollow').click()
        cy.get('#username').type('alunoebac@teste.com')
        cy.get('#password').type('teste@teste.com')
        cy.get('.woocommerce-form > .button').click()
        cy.get('.woocommerce-error > li').should('contain', 'Erro:')
    })

    it('deve exibir uma mensagem de erro ao inserir senha invalida', () => {
  //    cy.get('.icon-user-unfollow').click()
        cy.get('#username').type('aluno_ebac@teste.com')
        cy.get('#password').type('teste@teste')
        cy.get('.woocommerce-form > .button').click()
        cy.get('.woocommerce-error > li').should('contain', 'Erro:')
    })

})
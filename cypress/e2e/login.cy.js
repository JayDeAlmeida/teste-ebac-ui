/// <reference types="cypress" />

//const { afterEach } = require("mocha");

context ('funcionalidade login', () => {

    beforeEach(() => {
        cy.visit('http://lojaebac.ebaconline.art.br')
    });

    afterEach(() => {
        cy.screenshot()
    });

    it('deve fazer login com sucesso', () => {
        cy.get('.icon-user-unfollow').click()
        cy.get('#username').type('aluno_ebac@teste.com')
        cy.get('#password').type('teste@teste.com')
        cy.get('.woocommerce-form > .button').click()
        cy.get('a > .hidden-xs').should('contain', 'Welcome Aluno')
    })

    it('deve exibir uma mensagem de erro ao inserir usuario invalido', () => {
        cy.get('.icon-user-unfollow').click()
        cy.get('#username').type('alunoebac@teste.com')
        cy.get('#password').type('teste@teste.com')
        cy.get('.woocommerce-form > .button').click()
        cy.get('.woocommerce-error > li').should('contain', 'Erro:')
    })

    it('deve exibir uma mensagem de erro ao inserir senha invalida', () => {
        cy.get('.icon-user-unfollow').click()
        cy.get('#username').type('aluno_ebac@teste.com')
        cy.get('#password').type('teste@teste')
        cy.get('.woocommerce-form > .button').click()
        cy.get('.woocommerce-error > li').should('contain', 'Erro:')
    })

})
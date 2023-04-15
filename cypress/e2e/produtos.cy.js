/// <reference types="cypress" />

describe('funcionalidade página de produtos', () => {

    beforeEach(() => {
        cy.visit('http://lojaebac.ebaconline.art.br/')
    });
    
    it('deve selecionar um produto da lista', () => {
        cy.get('.products > .row')
        //.first()
        //.last()
      //  eq(4)
        .contains('Thais')
        .click()
        cy.get('.woocommerce-review-link').should('contain', 'customer')
        
    });

    it('deve adicionar um produto ao carrinho', () => {
        cy.get('.products > .row')
        .contains('Thais')
        .click()
        cy.get('.single_add_to_cart_button').click()
        cy.get('.woocommerce-message').should('contain', ' foi adicionado no seu carrinho.')
        
    });
});
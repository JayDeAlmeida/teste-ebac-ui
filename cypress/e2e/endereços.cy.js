/// <reference types="cypress" />

describe('funcionalidade endereços - faturamento e entrega', () => {
    
    beforeEach(() => {
        cy.visit('http://lojaebac.ebaconline.art.br/minha-conta')
        cy.login('aluno_ebac@teste.com', 'teste@teste.com')
    });

    it('deve fazer cadastro de faturamento com sucesso', () => {
        
    });

});
/// <reference types="cypress" />
import EnderecoPage from '../support/page-objects/endereco.page'

describe('funcionalidade endereços - faturamento e entrega', () => {
    
    beforeEach(() => {
        cy.visit('http://lojaebac.ebaconline.art.br/minha-conta')
        cy.login('aluno_ebac@teste.com', 'teste@teste.com')
    });

    it('deve fazer cadastro de faturamento com sucesso', () => {
        EnderecoPage.editarEnderecoFaturamento('teste', 'teste jr', 'teste sa', 'Brasil', 'teste',
                                                '404', 'salvador', 'Bahia', '40270-010', '71 99999-9999', 'testando@teste.com')
        cy.get('.woocommerce-message').should('contain', 'Endereço alterado com sucesso.')
    });

});
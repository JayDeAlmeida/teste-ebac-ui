/// <reference types="cypress" />
import EnderecoPage from '../support/page-objects/endereco.page'
const dadosEndereco = require ('../fixtures/endereco.json')

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

    it('deve fazer cadastro de faturamento com sucesso - usando lista de massa de dados', () => {
        EnderecoPage.editarEnderecoFaturamento(dadosEndereco[1].nome, dadosEndereco[1].sobrenome, dadosEndereco[1].empresa,
            dadosEndereco[1].pais, dadosEndereco[1].rua, dadosEndereco[1].numero, dadosEndereco[1].cidade,
            dadosEndereco[1].estado, dadosEndereco[1].cep, dadosEndereco[1].telefone, dadosEndereco[1].email)
        cy.get('.woocommerce-message').should('contain', 'Endereço alterado com sucesso.')
    });

    it('deve fazer o cadastro de entrega com sucesso', () => {
        EnderecoPage.editarEnderecoEntrega(dadosEndereco[0].nome, dadosEndereco[0].sobrenome, dadosEndereco[0].empresa,
            dadosEndereco[0].pais, dadosEndereco[0].rua, dadosEndereco[0].numero, dadosEndereco[0].cidade,
            dadosEndereco[0].estado, dadosEndereco[0].cep, dadosEndereco[0].telefone, dadosEndereco[0].email)
            cy.get('.woocommerce-message').should('contain', 'Endereço alterado com sucesso.')
    });

});
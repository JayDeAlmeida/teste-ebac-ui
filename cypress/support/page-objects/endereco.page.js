class EnderecoPage {

    editarEnderecoFaturamento(nome, sobrenome, empresa, pais, rua, numero, cidade, estado, cep, telefone, email) {
        cy.get('.woocommerce-MyAccount-navigation-link--edit-address > a').click()
        cy.get(':nth-child(1) > .title > .edit').click()

        cy.get('#billing_first_name').clear().type(nome)
        cy.get('#billing_last_name').clear().type(sobrenome)
        cy.get('#billing_company').clear().type(empresa)

// forma 1 de usar scroll de seleção com caixa de texto
        cy.get('#select2-billing_country-container').click().type(pais).get('[aria-selected]').click()

        cy.get('#billing_address_1').clear().type(rua)
        cy.get('#billing_address_2').clear().type(numero)
        cy.get('#billing_city').clear().type(cidade)

//forma 2 de usar scroll de seleção com caixa de texto (simplificado)
        cy.get('#select2-billing_state-container').click().type(estado + '{enter}')
        
        cy.get('#billing_postcode').clear().type(cep)
        cy.get('#billing_phone').clear().type(telefone)
        cy.get('#billing_email').clear().type(email)
        cy.get(':nth-child(2) > .button').click()
    }

    editarEnderecoEntrega() {

    }

}

export default new EnderecoPage()
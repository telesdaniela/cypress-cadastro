/// <reference types='cypress' />

describe('Cadastro de usuário', () => {
    beforeEach(() => {
        cy.visit('/register')
    })
    
    it('Validar campo nome vazio', () => {
        
            cy.get('#email').type('teste@testecypress.com.br')
                .get('#password').type('teste123')
                .get('#btnRegister').click()
                .get('#errorMessageFirstName').should('contain', 'O campo nome deve ser prenchido')

    });    

    it('Validar campo e-mail vazio', () => {

        cy.get('#user').type('Maria Rita')
            .get('#password').type('teste123')
            .get('#btnRegister').click()
            .get('#errorMessageFirstName').should('contain', 'O campo e-mail deve ser prenchido corretamente')

    })    

    it('Validar campo e-mail inválido', () => {
        cy.get('#user').type('Maria Rita')
            .get('#email').type('teste.testecypress.com.br')
            .get('#password').type('teste123')
            .get('#btnRegister').click()
            .get('#errorMessageFirstName').should('contain', 'O campo e-mail deve ser prenchido corretamente')

    })      

    it('Validar campo senha inválida', () => {
        cy.get('#user').type('Maria Rita')
            .get('#email').type('teste@testecypress.com.br')
            .get('#password').type('teste')
            .get('#btnRegister').click()
            .get('#errorMessageFirstName').should('contain', 'O campo senha deve ter pelo menos 6 dígitos')

    })    

    it('Cadastro realizado com sucesso', () => {
        cy.get('#user').type('Maria Rita')
            .get('#email').type('teste@testecypress.com.br')
            .get('#password').type('teste123')
            .get('#btnRegister').click()
            .get('#swal2-title').should('contain', 'Cadastro realizado!')
            .get('#swal2-html-container').should('contain', 'Bem-vindo Maria Rita')

    })
});
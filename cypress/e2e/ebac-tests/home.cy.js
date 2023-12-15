describe('Teste de Funcionalidades da Agenda de Contatos', () => {
    beforeEach(() => {
        cy.visit('https://agenda-contatos-react.vercel.app/');
    });

    it('Deve incluir um novo contato', () => {
        const nomeContato = 'Eduardo Alberto de Oliveira';
        const emailContato = 'ealboliveira@example.com';
        const telefoneContato = '4699664636';

        cy.get('input[placeholder="Nome"]').type(nomeContato);
        cy.get('input[placeholder="E-mail"]').type(emailContato);
        cy.get('input[placeholder="Telefone"]').type(telefoneContato);

        cy.get('button.adicionar').click(); 
    });

    it('Deve editar um contato específico', () => {
        cy.get(':nth-child(2) > .sc-gueYoa > .edit')
            .should('exist')
            .should('be.visible')
            .click();

        const novoNome = 'Gian Souza';
        const novoEmail = 'novoemail@example.com';
        const novoTelefone = '1234567890';

        cy.get('input[placeholder="Nome"]').clear().type(novoNome);
        cy.get('input[placeholder="E-mail"]').clear().type(novoEmail);
        cy.get('input[placeholder="Telefone"]').clear().type(novoTelefone);

        cy.get('button.alterar')
            .should('exist')
            .should('be.visible')
            .click();
    });

    it('Deve remover o primeiro contato da lista', () => {
        cy.get('.contato', { timeout: 10000 }).should('exist');
    
        cy.get('.sc-gueYoa .delete', { timeout: 10000 })
            .first() 
            .should('exist')
            .should('be.visible')
            .click();
    });
    
});

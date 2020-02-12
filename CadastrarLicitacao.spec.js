describe("Cadastrar usuário", () => {


    it("Cadastrar admin", () => {

        cy.visit("https://app-13-223-45885.ide.cronapp.io");
        cy.get("input[ng-model='username.value']").type("admin");
        cy.get("input[ng-model='password.value']").type("admin");
        cy.get(".k-button").click();

        cy.get(".crn-menu-item .caret").click();
        cy.get("li:nth-child(3) span").click();
        cy.wait(3000);
        cy.get("a.k-button").first().click();

        cy.wait(1000);
        cy.get("input[id='textinput-numero_processo']").type("0001");
        cy.get("input[id='textinput-nome']").type("Compra de cafeteiras");
        cy.get("input[id='textinput-descricao']").type("Compra de cafeteiras");
        cy.get("input[id='cron-crn-enterprise-dynamic-autocomplete-151412']").type("admin");
        cy.get(".cronDynamicSelect").first().click();
        cy.wait(1000);
        cy.get("input.k-textbox").last().type("P").type("{enter}{downarrow}{enter}");
     

      cy.get("input[ng-model='Licitacao.active.previsao_encerramento']").click();
      cy.get("button[id='btn_crud_post41107']").click();


    })
    
})
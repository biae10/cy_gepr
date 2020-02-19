describe("Excluir perguntas", () => {


    it("Excluir perguntas", () => {

        cy.visit("https://app-9-254-62371.ide.cronapp.io");
        cy.get("input[ng-model='username.value']").type("admin");
        cy.get("input[ng-model='password.value']").type("admin");
        cy.get(".k-button").click();

        cy.get("ul.navbar-nav > li:nth-child(2)").click();
        cy.get("ul.dropdown-menu > li:nth-child(4)").click();
        cy.wait(3000);
        cy.get("table.k-selectable > tbody > tr:nth-child(1) > td:nth-child(6) > a:nth-child(2)").click();


    })
    
})
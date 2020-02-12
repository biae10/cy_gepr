describe("Cadastrar usuário", () => {


    it("Cadastrar admin", () => {

        cy.visit("https://app-13-223-45885.ide.cronapp.io");
        cy.get("input[ng-model='username.value']").type("admin");
        cy.get("input[ng-model='password.value']").type("admin");
        cy.get(".k-button").click();

        cy.get(".crn-menu-item .caret").click();
        cy.get("a:nth-child(2) > span:nth-child(2)").click();
        cy.wait(1000);
        cy.get("a.k-link").first().click();
        cy.get("a.k-link").first().click();
        cy.wait(1000);
        cy.get("span.k-i-close").first().click();


    })
    






})
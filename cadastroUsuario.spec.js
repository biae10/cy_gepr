describe("Cadastrar usuário", () => {


    it("Cadastrar admin", () => {

        cy.visit("https://app-13-223-45885.ide.cronapp.io");
        cy.get("input[ng-model='username.value']").type("admin");
        cy.get("input[ng-model='password.value']").type("admin");
        cy.get(".k-button").click();

        cy.get(".crn-menu-item .caret").click();
        cy.get("a:nth-child(2) > span:nth-child(2)").click();
        cy.wait(1000);
        cy.get("a.k-button").first().click();

        cy.wait(1000);

        cy.get("input#textinput-email").type("pedro.lima@cronapp.io");
        cy.get("input#textinput-name").type("Pedro Lima");
        cy.get("input#textinput-login").type("pedro.lima");
        cy.get("input#textinput-password").type("123456");

        cy.get("a.k-button").last().click();
        cy.get(".pull-right:nth-child(3)").click();
        cy.get("#ui-select-choices-row-0-0 .ng-binding").click();
        cy.get("button[ng-click='RoleGrid.post();']").click();
        cy.get("button[ng-click='datasource.post()']").click();

        cy.wait(1000);
        cy.get("a.k-button").first().click();

        cy.wait(1000);

        cy.get("input#textinput-email").type("bianca.ferreira@cronapp.io");
        cy.get("input#textinput-name").type("Bianca Campos");
        cy.get("input#textinput-login").type("bianca.campos");
        cy.get("input#textinput-password").type("123456");

        cy.get("a.k-button").last().click();
        cy.get(".pull-right:nth-child(3)").click();
        cy.get("#ui-select-choices-row-0-1 .ng-binding").click();
        cy.get("button[ng-click='RoleGrid.post();']").click();
        cy.get("button[ng-click='datasource.post()']").click();

        cy.wait(1000);
        cy.get("a.k-button").first().click();

        cy.wait(1000);

        cy.get("input#textinput-email").type("deborah.carvalho@cronapp.io");
        cy.get("input#textinput-name").type("Deborah Carvalho");
        cy.get("input#textinput-login").type("deborah.carvalho");
        cy.get("input#textinput-password").type("123456");

        cy.get("a.k-button").last().click();
        cy.get(".pull-right:nth-child(3)").click();
        cy.get("#ui-select-choices-row-0-2 .ng-binding").click();
        cy.get("button[ng-click='RoleGrid.post();']").click();
        cy.get("button[ng-click='datasource.post()']").click();
    })
    






})
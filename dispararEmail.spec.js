describe("Disparar Email", () =>{


    it("Disparar Email", () =>{


        cy.visit("https://app-15-108-19962.ide.cronapp.io");
        cy.get("input[ng-model='username.value']").type("admin");
        cy.get("input[ng-model='password.value']").type("admin");
        cy.get("button.btn-login").click();

        cy.get("ul.navbar-nav > li:nth-child(2)").click();
        cy.get("ul.dropdown-menu > li:nth-child(4)").click();
        cy.wait(3000);
       
        cy.get("div[data-component='crn-enterprise-dynamic-combobox']").first().click();
        cy.wait(3000);
        cy.get("input[aria-owns='cron-crn-enterprise-dynamic-combobox-665545_listbox']").type("06").type(" {downarrow}{enter}");


      //  cy.get("table.k-selectable > tbody > tr:nth-child(1) > td:nth-child(1) > label.k-no-text").click();
       cy.get("#crn-text-component-96409").click(); 
       cy.wait(3000);
       cy.get("th.k-header").first().click();
       cy.wait(3000);
       cy.get("a.k-grid-custom").click();

       


    })



})
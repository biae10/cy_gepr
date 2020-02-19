describe("Editar perguntas", () => {


    it("Editar perguntas", () => {

        cy.visit("https://app-9-254-62371.ide.cronapp.io");
        cy.get("input[ng-model='username.value']").type("admin");
        cy.get("input[ng-model='password.value']").type("admin");
        cy.get(".k-button").click();

        cy.get("ul.navbar-nav > li:nth-child(2)").click();
        cy.get("ul.dropdown-menu > li:nth-child(4)").click();
        cy.wait(3000);
        cy.get("table.k-selectable > tbody > tr:nth-child(3) > td:nth-child(6) > a:nth-child(1)").click();


        cy.wait(1000);
        cy.get("label[id='enterprise-dynamic-combobox-fk_licitacao_label']").click();
        cy.wait(3000);
        cy.get("input[aria-owns='enterprise-dynamic-combobox-fk_licitacao_listbox']").first().type("0").type("{enter}{downarrow}{enter}"); 

        
        cy.get("input[ng-model='Pergunta.active.descricao']").clear().type("YYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYY-XXXXXXXXXXXXXX");

        cy.get("div#crn-grid-PalavrasChaveGrid-96409 > cron-grid > div > div > a:nth-child(1) ").first().click();
        cy.get("input#cron-crn-enterprise-dynamic-autocomplete-914524").type("Barbie");
        cy.get("div#modalPalavrasChaveGrid > div > div > form > div:nth-child(3) > button:nth-child(1)").click();

     
        
    /* cy.get("cron-grid[ng-model='vars.PerguntaRespondentesGrid96409'] > div > div > a").first().click();
        cy.get("#combobox-modal-user-96409_label").click();
        cy.get("input[aria-owns='combobox-modal-user-96409_listbox']").type("D").type("{enter}{downarrow}{enter}");
        cy.get("#modalPerguntaRespondentesGrid").click();
        cy.get("div#modalPerguntaRespondentesGrid > div > div > form > div:nth-child(3) > button:nth-child(1)").click();
    */
        
        cy.wait(3000);
        cy.get("button[ng-click='datasource.post()'").click();



    })
    
})
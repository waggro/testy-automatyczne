/// <reference types= "cypress"/>

describe("Kliknięcie w element na stronie", () => {
    it("Kliknięcie w zakładkę contact us", () =>{
        cy.visit("/");
        cy.get("div#contact-link").click();
    })
})
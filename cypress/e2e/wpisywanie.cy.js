/// <reference types= "cypress"/>

describe("Wpisywanie i usuwanie tekstu", () => {
    it("Wpisywanie tekstu", () => {
        cy.visit("/");
        cy.get("#search_query_top").type("test");
        cy.get("#search_query_top").should("have.value", "test");
        cy.wait(3000);
        cy.get("#search_query_top").clear();
        cy.get("#search_query_top").type("test{backspace}{enter}");
        cy.get("p.alert").should("include.text", "No results were found for your search");
    })
})
/// <reference types= "cypress"/>

describe("Dropdown", () => {
    it("Zakładka Women", () => {
        cy.visit("/.");
        cy.get('a[title="Women"]').click();
        cy.url().should("include", "id_category=3&controller=category");
    })

    it("Wybór z dropdowna", () => {
        cy.get('#selectProductSort').select("In stock");
        cy.get('#selectProductSort').should("have.value", "quantity:desc");
        cy.get('#selectProductSort').select("Product Name: A to Z");       
        cy.get('#selectProductSort').should("have.value", "name:asc");
    })
})

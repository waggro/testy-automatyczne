/// <reference types= "cypress"/>

describe("Pierwszy test automatyczny", () => {
    it("Otworzenie strony google.com", () => {
        cy.visit("https://google.com")
    })
})
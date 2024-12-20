class Base{
    openHomepage() {
        cy.visit("/")
    }
}

export default new Base();
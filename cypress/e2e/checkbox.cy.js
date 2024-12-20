/// <reference types= "cypress"/>

import Base from "../pages/homepage.js";
import Home from "../pages/home.js";

describe("Checkbox", () => {
    it("Zakładka Women", () => {
        Base.openHomepage();
        Home.clickOnWomenTab();
        cy.url().should("include", "id_category=3&controller=category");
    })

    it("Zaznaczenie checkboxa",() =>{
        cy.get('input#layered_category_4').check();
        cy.get('#layered_category_4').should("be.checked");
    })
    it("Zaznaczenie wielu checkboxów", () => {
        cy.get('#ul_layered_id_attribute_group_1 input').check();
    })
})
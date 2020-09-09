describe("Home Page", () => {
  it("Content is displayed ", () => {
    cy.visit("/")

    cy.get("button").should("be.visible")
    cy.get("button")
      .first()
      .click({ force: true })

    cy.url().should("include", "/home")

    cy.get('[alt="Logo"]').should("be.visible")
    cy.get(".winning-numbers--content--numbers").should("be.visible")
    cy.get("table").should("be.visible")
  })
})

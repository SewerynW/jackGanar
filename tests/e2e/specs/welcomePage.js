describe("Welcome Page", () => {
  it("Content is displayed", () => {
    cy.visit("/")
    cy.contains("p", "Jack-Ganar").should("be.visible")

    cy.get('[alt="WeeklyLotery"]').should("be.visible")

    cy.get("button").should("contain", "Check the results of lottery!")
    cy.get("button").should("be.visible")
  })
})

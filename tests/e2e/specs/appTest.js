// https://docs.cypress.io/api/introduction/api.html

describe("App flow", () => {
  it("drawing results ", () => {
    cy.visit("/")
    cy.contains("p", "Jack-Ganar")
  })
})

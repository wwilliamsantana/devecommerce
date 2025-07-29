describe('Search products ', () => {

  it("should not be able to search for products", () => {
    cy.searchByQuery("camiseta")



    cy.location("pathname").should("include", "/search")
    cy.location("search").should("include", "q=camiseta")

    cy.get('a[href^="/product"]').should("exist")

  })

  it("should not be able to search page without a search query", () => {
    cy.visit("/search")

    cy.location('pathname').should('equal', '/')
  })


})
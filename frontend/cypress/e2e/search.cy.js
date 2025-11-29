describe('Search Dropdown', () => {
  beforeEach(() => {
    cy.visit('http://localhost:5173')
  })

  it('Opens the search dropdown when icon is clicked', () => {
    cy.get('[data-cy="search-trigger"]').click()  
    cy.get('input[placeholder="Search"]').should('be.visible')
  })

  it('Performs a search and navigates to search results page', () => {
    cy.get('svg').first().click()

    cy.get('input[placeholder="Search"]').type('dress')

    cy.get('button[type="button"]').click()

    cy.url().should('include', '/search?query=dress')
  })
})

describe('Wishlist Navigation', () => {
  beforeEach(() => {
    cy.visit('http://localhost:5173')
  })

  it('Navigates to wishlist page when wishlist icon is clicked', () => {
    cy.get('a[href="/wishlist"]').click()

    cy.url().should('include', '/wishlist')
  })
})

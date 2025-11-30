describe('Amabilis Homepage', () => {
  beforeEach(() => {
    cy.visit('/')
  })

  it('Loads the homepage successfully', () => {
    cy.url().should('eq', 'http://localhost:5173/')
  })

  it('Shows the navbar', () => {
    cy.get('header').should('exist')
  })

  it('Opens the search dropdown when icon is clicked', () => {
    cy.get('[data-cy="search-trigger"]').click()  
    cy.get('input[placeholder="Search"]').should('be.visible')
  })

  it('Opens the login/register dropdown when user icon is clicked', () => {
    cy.get('[data-cy="user-icon"]').click()

    cy.contains('Login').should('be.visible')
    cy.contains('Register').should('be.visible')
  })

  it('Cart button is visible and clickable', () => {
    cy.get('a[href="/cart"]').should('exist').click()
  })

  it('Loads the product details page successfully', () => {
    cy.contains('Mens Cotton Jacket').click()
    cy.url().should('include', '/product-details')
  })

  it('Footer renders', () => {
    cy.get('footer').should('exist')
  })
})

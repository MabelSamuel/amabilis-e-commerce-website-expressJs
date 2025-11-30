describe('Login / Register Dropdown', () => {
  beforeEach(() => {
    cy.visit('http://localhost:5173')
  })

  it('Opens the login/register dropdown when user icon is clicked', () => {
    cy.get('[data-cy="user-icon"]').click()

    cy.contains('Login').should('be.visible')
    cy.contains('Register').should('be.visible')
  })

  it('Navigates to login page', () => {
    cy.get('[data-cy="user-icon"]').click()
    cy.contains('Login').click()

    cy.url().should('include', '/login-register/login')
  })

  it('Navigates to register page', () => {
    cy.get('[data-cy="user-icon"]').click()
    cy.contains('Register').click()

    cy.url().should('include', '/login-register/register')
  })
})

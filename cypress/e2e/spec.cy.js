describe('navigation spec', () => {
  it('navigate to first page', () => {
    cy.visit('http://localhost:5173/#/')
    cy.get('.forward').click()
    cy.url().should('include', '/html')
  })
  it('navigate back from git', () => {
    cy.visit('http://localhost:5173/#/git')
    cy.get('.back').click()
    cy.url().should('include', '/js')
  })
})

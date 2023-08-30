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
    cy.contains('ES6 and beyond')
  })
  it('inventory is full after navigating to each', () => {
    cy.visit('http://localhost:5173/#/')
    const pages = ['html', 'css', 'js', 'git', 'vue']
    for (let page in pages) {
      cy.get('.forward').click()
      cy.wait(370)
    }
    cy.get('.visited').should('have.length', pages.length)
  })
})

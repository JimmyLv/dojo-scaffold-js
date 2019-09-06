beforeEach(() => {
  cy.visit('http://localhost:3000/')
})

it('Can add, complete, uncompleted, delete an todo item and filter by status', () => {
  // Given When Then
  cy.get('[type="text"]')
    .type('Get eggs')

  cy.get('[type="submit"]')
    .click()

  cy.get('li:first')
    .should('contain', 'Get eggs')

  cy.get('[type="text"]')
    .type('Buy milk')

  cy.get('[type="submit"]')
    .click()

  cy.get('li')
    .should('have.length', 2)
})

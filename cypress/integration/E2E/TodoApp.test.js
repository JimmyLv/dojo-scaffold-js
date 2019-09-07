beforeEach(() => {
  cy.visit('http://localhost:3000/')
})

it('Can add, complete, uncompleted, delete an todo item and filter by status', () => {
  // Given When Then
  cy.get('[type="text"]')
    .type('Get eggs')

  cy.get('button')
    .click()

  cy.get('li:first')
    .should('contain', 'Get eggs')

  cy.get('[type="text"]')
    .type('Buy milk')

  cy.get('button')
    .click()

  cy.get('li')
    .should('have.length', 2)

  cy.contains('Get eggs')
    .click()
    .should('have.css', 'text-decoration', 'line-through solid rgb(217, 217, 217)')

  cy.contains('Buy milk')
    .children('.delete')
    .click()

  cy.get('li')
    .should('have.length', 1)

  cy.get('[type="text"]')
    .type('Buy Apple')

  cy.get('button')
    .click()

  cy.get('.count').should('contain', '2')

  cy.contains('Completed').click()
  cy.contains('Active').click()

  cy.get('li')
    .should('have.length', 1)

  cy.contains('All').click()

  cy.get('li')
    .should('have.length', 2)
})

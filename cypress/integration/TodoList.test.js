beforeEach(() => {
  cy.visit('http://localhost:3000/')
})

it('Can add an item via the button', () => {
  cy.get('input')
    .type('Get eggs')

  cy.get('button')
    .click()

  cy.get('li:first')
    .should('contain', 'Get eggs')
})

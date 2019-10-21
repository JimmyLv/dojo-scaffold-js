describe('todos API', () => {
  it('returns JSON', () => {
    cy.request('http://localhost:8080/todos')
      .its('headers')
      .its('content-type')
      .should('include', 'application/json')
  })
})

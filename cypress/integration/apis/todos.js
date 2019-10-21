describe('todos API', () => {
  const initialItems = [
    {
      "id": 1,
      "task": "read something"
    },
    {
      "id": 2,
      "task": "write something"
    }
  ]

  const getItems = () =>
    cy.request('/todos')
      .its('body')

  it('returns JSON', () => {
    cy.request('/api/todos')
      .its('headers')
      .its('content-type')
      .should('include', 'application/json')
  })
  it('loads 2 items', () => {
    cy.request('/api/todos')
      .its('body')
      .should('have.length', 2)
  })


})

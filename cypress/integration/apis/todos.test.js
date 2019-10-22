describe('todos API', () => {
  const initialItems = [
    {
      id: 1,
      text: 'read something',
      completed: false,
    },
    {
      id: 2,
      text: 'write something',
      completed: true,
    },
  ]

  const getItems = () => cy.request('/api/todos').its('body')

  const addItem = item => cy.request('POST', '/api/todos', item)

  const deleteItem = item => cy.request('DELETE', `/api/todos/${item.id}`)

  const deleteAll = () => getItems().each(deleteItem)

  const reset = () => {
    deleteAll()
    initialItems.forEach(addItem)
  }

  it('returns JSON', () => {
    cy.request('/api/todos')
      .its('headers')
      .its('content-type')
      .should('include', 'application/json')
  })
  it('loads 2 items', () => {
    getItems().should('have.length', 2)
  })

  describe('Idempotent tests', () => {
    it('loads the initial items', () => {
      getItems().should('deep.eq', initialItems)
    })

    it('returns id + text objects', () => {
      getItems().each(value => expect(value).to.have.all.keys('id', 'text', 'completed'))
    })
  })

  describe('CURD tests', () => {
    beforeEach(reset)
    afterEach(reset)

    it('add an item', () => {
      const randomId = Cypress._.random(0, 10000)
      const item = { id: randomId, text: 'life hacker', completed: false }

      addItem(item)
      cy.request(`/api/todos/${randomId}`)
        .its('body')
        .should('deep.eq', item)
    })

    it('delete an item', () => {
      const id = initialItems[0].id
      cy.request('DELETE', `/api/todos/${id}`)
      getItems().should('have.length', 1)
    })
  })
})

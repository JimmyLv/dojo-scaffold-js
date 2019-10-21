describe('TodoApp', () => {
  const addTodo = (text = 'Get eggs') => {
    // Given When Then
    cy.findByTestId('todoText').type(text)
    cy.findByTestId('addTodo').click()
    cy.get('li').should('contain', text)
  }

  beforeEach(() => {
    cy.visit('http://localhost:3000/')
    addTodo()
  })

  it('Can add and delete an todo item', () => {
    addTodo('Buy milk')

    cy.get('li').should('have.length', 2)

    cy.contains('Buy milk')
      .siblings('.delete')
      .click()

    cy.get('li').should('have.length', 1)
  })

  it('should toggle completed status', () => {
    cy.contains('Get eggs')
      .click()
      .parent()
      .should(
        'have.css',
        'text-decoration',
        'line-through solid rgb(217, 217, 217)'
      )
  })

  it('should filter todos by status', () => {
    addTodo('Buy Apple')
    cy.contains('Get eggs').click()

    cy.get('.count').should('contain', '2')

    cy.contains('Completed').click()
    cy.get('li').should('have.length', 1)

    cy.contains('Active').click()
    cy.get('li').should('have.length', 1)

    cy.contains('All').click()
    cy.get('li').should('have.length', 2)
  })
})

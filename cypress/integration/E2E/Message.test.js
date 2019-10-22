describe('Sending a message', () => {
  it('should show new added message on the list', () => {
    cy.visit('/')
    cy.findByTestId('messageText').type('New Message')
    cy.findByTestId('sendButton').click()

    cy.findByTestId('messageText').should('have.value', '')
    cy.contains('New Message')
  })
})

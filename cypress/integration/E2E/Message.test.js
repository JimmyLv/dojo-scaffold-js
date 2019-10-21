describe('Sending a message', () => {
  it('should show new added message on the list', () => {
    cy.visit(' http://localhost:3000/')
    cy.findByTestId('messageText').type('NewMessage')
    cy.findByTestId('sendButton').click()

    cy.findByTestId('messageText').should('have.value','')
    cy.contains('NewMessage')
  })
});

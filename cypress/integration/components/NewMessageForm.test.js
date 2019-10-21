import React from 'react'
import NewMessageForm from '../../../src/components/NewMessageForm'

describe('<NewMessageForm />', () => {
  describe('clicking the send button', () => {
    it('should clears the text field', () => {
      cy.mount(<NewMessageForm />)

      cy.findByTestId('messageText').type('NewMessage')

      cy.findByTestId('sendButton').click()

      cy.findByTestId('messageText').should('have.value','')
    })
  })
});

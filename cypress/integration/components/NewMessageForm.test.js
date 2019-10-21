import React from 'react'
import NewMessageForm from '../../../src/components/NewMessageForm'

describe('<NewMessageForm />', () => {
  describe('clicking the send button', () => {
    let sendHandler
    beforeEach(() => {
      sendHandler = cy.spy()
      cy.mount(<NewMessageForm onSend={sendHandler}/>)

      cy.findByTestId('messageText').type('New Message')
      cy.findByTestId('sendButton').click()
    });

    it('should clears the text field', () => {
      cy.findByTestId('messageText').should('have.value','')
    })

    it('should calls the send handler', () => {
      expect(sendHandler).to.have.been.calledWith('New Message')
    })
  })
});

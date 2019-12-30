function addComment(commentText) {
  cy.queryByPlaceholderText('Add a public comment...').type(commentText)
  cy.queryByTestId('add-comment-button').click()
}

describe('CommentBox page', () => {
  it('should comment then show content in comment list', () => {
    const commentText = 'new comment text'
    const repliedCommentText = 'replied comment text'

    cy.visit('/')

    cy.queryByTestId('comment-title').should('have.text', 'Comments')
    cy.queryByText('No Comments').should('exist')

    addComment(commentText)

    cy.queryByTestId('comment-title').should('have.text', '1 Comments')
    cy.queryByText(commentText).should('exist')
    cy.queryByText('No Comments').should('not.exist')

    addComment(repliedCommentText)

    cy.queryByTestId('comment-title').should('have.text', '2 Comments')
    cy.queryAllByTestId('comment-content')
      .eq(0)
      .should('have.text', repliedCommentText)
    cy.queryAllByTestId('comment-content')
      .eq(1)
      .should('have.text', commentText)

    cy.queryByTestId('order-comment').select('oldFirst')
    cy.queryAllByTestId('comment-content')
      .eq(0)
      .should('have.text', commentText)
    cy.queryAllByTestId('comment-content')
      .eq(1)
      .should('have.text', repliedCommentText)
  })
})

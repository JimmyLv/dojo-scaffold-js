function addComment(commentText) {
  cy.queryByPlaceholderText('请输入新留言…').type(commentText)
  cy.queryByTestId('save-comment').click()
}

describe('Comments Page', () => {
  it('should show comment title and new comment box', () => {
    const commentText = '唱跳Rap篮球！'
    const repliedComment = '律师函警告！'

    cy.visit('/')

    cy.queryByTestId('comment-title').should('exist')
    cy.queryByText('暂无留言').should('exist')

    addComment(commentText)

    cy.queryByTestId('comment-title').should('have.text', '1 留言')
    cy.queryByText('暂无留言').should('not.exist')
    cy.queryByText(commentText).should('exist')

    addComment(repliedComment)

    cy.queryByTestId('comment-title').should('have.text', '2 留言')
    cy.queryAllByTestId('comment-content').should('have.length', 2)
    cy.queryByText(commentText)
      .children()
      .contains(repliedComment)
  })
})

function addComment(commentText) {
  cy.queryByPlaceholderText('请输入新留言…').type(commentText)
  cy.queryByTestId('reply-comment').click()
}

describe('Comments Page', () => {
  it('should add new comment and show comment list', () => {
    const commentText = '唱跳Rap篮球！！！'
    const repliedComment = '律师函警告！'

    cy.visit('/')
    cy.queryByTestId('comment-title').should('have.text', '留言板')
    cy.queryByText('留言为空').should('exist')

    addComment(commentText)

    cy.queryByTestId('comment-title').should('have.text', '1 留言')
    cy.queryByText('留言为空').should('not.exist')
    cy.queryByText(commentText).should('be.visible')

    addComment(repliedComment)

    cy.queryByTestId('comment-title').should('have.text', '2 留言')
    cy.queryAllByTestId('comment-content')
      .eq(0)
      .should('have.text', repliedComment)
    cy.queryAllByTestId('comment-content')
      .eq(1)
      .should('have.text', commentText)

    cy.queryByTestId('sort-comment').click()
    cy.queryByText('从旧到新').click()
    cy.queryAllByTestId('comment-content')
      .eq(0)
      .should('have.text', commentText)
  })
})

import React from 'react'
import { CommentList } from './CommentList'
import { render } from '@testing-library/react'

it('should show no content when no comments', () => {
  const { queryByText } = render(<CommentList comments={[]} />)

  expect(queryByText('暂无留言')).toBeTruthy()
})
it('should show content list when have comments', () => {
  const { queryByText, queryAllByTestId } = render(
    <CommentList comments={['comment1', 'comment2']} />
  )

  const comments = queryAllByTestId('comment-content').map(
    item => item.textContent
  )
  expect(queryByText('暂无留言')).toBeFalsy()
  expect(comments).toMatchInlineSnapshot(`
    Array [
      "comment1",
      "comment2",
    ]
  `)
})

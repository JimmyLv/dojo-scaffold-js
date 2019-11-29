import { render } from '@testing-library/react'
import React from 'react'
import { CommentList } from './CommentList'

it('should show empty content when no comments', () => {
  const { queryByText } = render(<CommentList comments={[]} />)

  expect(queryByText('留言为空')).toBeTruthy()
})

it('should show comments content when have comments', () => {
  const { queryByText, queryAllByTestId } = render(
    <CommentList comments={['comment1', 'comment2']} />
  )

  expect(queryByText('留言为空')).toBeFalsy()
  expect(queryAllByTestId('comment-content').map(i => i.textContent))
    .toMatchInlineSnapshot(`
    Array [
      "comment2",
      "comment1",
    ]
  `)
})

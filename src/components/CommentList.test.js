import { render } from '@testing-library/react'
import React from 'react'
import { commentList, emptyComment } from './CommentList.stories'

test('should render empty comment', () => {
  const { queryByText } = render(emptyComment())
  expect(queryByText('No Comments')).toBeTruthy()
})

test('should render comment list', () => {
  const { queryAllByTestId } = render(commentList())
  expect(queryAllByTestId('comment-content').map(i => i.textContent))
    .toMatchInlineSnapshot(`
    Array [
      "text1",
      "text2",
    ]
  `)
})

import { render } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import React from 'react'
import { CommentTitle } from './CommentTitle'
import { emptyComments, orderComments } from './CommentTitle.stories'

test('should heading of comments', () => {
  const { queryByTestId } = render(emptyComments())
  expect(queryByTestId('comment-title')).toHaveTextContent('Comments')
})
test('should heading with count of comments', () => {
  const { queryByTestId } = render(<CommentTitle count={1} />)

  expect(queryByTestId('comment-title')).toHaveTextContent('1 Comments')
})

test('should reorder by click order options', () => {
  const orderHandler = jest.fn()
  const { queryByTestId } = render(orderComments(orderHandler))

  userEvent.selectOptions(queryByTestId('order-comment'), 'oldFirst')

  expect(orderHandler).toBeCalledWith('oldFirst')
})

import { render } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import React from 'react'
import { AddComment } from './AddComment'
import { addComment } from './AddComment.stories'

test('should add new comment when input text and click button', () => {
  const addHandler = jest.fn()
  const commentText = 'new comment text'

  const { queryByTestId, queryByPlaceholderText } = render(
    <AddComment onAdd={addHandler} />
  )

  expect(queryByTestId('add-comment-button')).toBe(null)

  userEvent.type(queryByPlaceholderText('Add a public comment...'), commentText)
  userEvent.click(queryByTestId('add-comment-button'))

  expect(addHandler).toBeCalledWith(commentText)
  expect(queryByPlaceholderText('Add a public comment...').value).toBe('')
  expect(queryByTestId('add-comment-button')).toBe(null)
})

test('should rest comment content when click cancel button', () => {
  const commentText = 'new comment text'

  const { queryByTestId, queryByPlaceholderText } = render(addComment())

  expect(queryByTestId('add-comment-button')).toBe(null)
  expect(queryByTestId('cancel-comment-button')).toBe(null)

  userEvent.type(queryByPlaceholderText('Add a public comment...'), commentText)
  userEvent.click(queryByTestId('cancel-comment-button'))

  expect(queryByPlaceholderText('Add a public comment...').value).toBe('')
  expect(queryByTestId('cancel-comment-button')).toBe(null)
})

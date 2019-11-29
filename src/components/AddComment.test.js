import userEvent from '@testing-library/user-event'
import React from 'react'
import { AddComment } from './AddComment'
import { fireEvent, render } from '@testing-library/react'

const commentText = 'newComment'

it('should call onSave when add new comment', () => {
  let saveHandler = jest.fn()

  const { queryByPlaceholderText, queryByTestId } = render(
    <AddComment onSave={saveHandler} />
  )

  userEvent.click(queryByPlaceholderText('请输入新留言…'))
  userEvent.type(queryByPlaceholderText('请输入新留言…'), commentText)
  userEvent.click(queryByTestId('reply-comment'))

  expect(saveHandler).toBeCalledWith(commentText)
  expect(queryByPlaceholderText('请输入新留言…').value).toBe('')
  expect(queryByTestId('reply-comment')).toBe(null)
})

it('should only show button when click input', () => {
  const { queryByPlaceholderText, queryByTestId } = render(<AddComment />)

  expect(queryByTestId('reply-comment')).toBe(null)

  userEvent.click(queryByPlaceholderText('请输入新留言…'))
  expect(queryByTestId('reply-comment')).toHaveTextContent('回 复')

  userEvent.click(queryByTestId('cancel-comment'))
  expect(queryByTestId('reply-comment')).toBe(null)
})

it.skip('should save comment when "enter" keydown', () => {
  let saveHandler = jest.fn()

  const { queryByPlaceholderText } = render(<AddComment onSave={saveHandler} />)

  userEvent.type(queryByPlaceholderText('请输入新留言…'), commentText)
  fireEvent.keyDown(queryByPlaceholderText('请输入新留言…'), {
    key: 'Enter',
    code: 13,
  })

  expect(saveHandler).toBeCalledWith(commentText)
  expect(queryByPlaceholderText('请输入新留言…').value).toBe('')
})

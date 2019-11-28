// @ts-nocheck
import userEvent from '@testing-library/user-event'
import React from 'react'
import { AddComment } from './AddComment'
import { render } from '@testing-library/react'

it('should call onSave when click reply button', () => {
  let saveHandler = jest.fn()

  const newComment = 'newComment'
  const { queryByPlaceholderText, queryByTestId } = render(
    <AddComment onSave={saveHandler} />
  )

  const input = queryByPlaceholderText('请输入新留言…')
  userEvent.type(input, newComment)
  userEvent.click(queryByTestId('save-comment'))

  expect(saveHandler).toBeCalledWith(newComment)
  expect(input.value).toBe('')
})

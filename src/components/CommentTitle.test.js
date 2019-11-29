import userEvent from '@testing-library/user-event'
import React from 'react'
import { CommentTitle } from './CommentTitle'
import { render } from '@testing-library/react'
const comments = ['comment1', 'comment2']

it('should show init title when no comments', () => {
  const { queryByText } = render(<CommentTitle comments={[]} />)
  expect(queryByText('留言板')).toBeTruthy()
})

it('should show title with count when have comments', () => {
  const { queryByText, queryByTestId } = render(
    <CommentTitle comments={comments} />
  )
  expect(queryByText('留言板')).toBeFalsy()
  expect(queryByTestId('comment-title')).toHaveTextContent('2 留言')
})

it('should call sortBy when select sort selections', () => {
  let sortHandler = jest.fn()
  const { queryByTestId, queryByText } = render(
    <CommentTitle comments={comments} onSort={sortHandler} />
  )

  userEvent.click(queryByTestId('sort-comment'))
  userEvent.click(queryByText('从旧到新'))

  expect(sortHandler).toBeCalledWith('oldest')
})

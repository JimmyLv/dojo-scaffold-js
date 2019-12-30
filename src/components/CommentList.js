import { isEmpty } from 'lodash'
import React from 'react'
import styled from 'styled-components'

export function CommentList({ comments }) {
  if (isEmpty(comments)) {
    return <Empty>No Comments</Empty>
  }
  return (
    <StyledList>
      {comments.map(c => (
        <li data-testid="comment-content" key={c}>
          {c}
        </li>
      ))}
    </StyledList>
  )
}

const StyledList = styled.ol`
  margin-top: 10px;
`

const Empty = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`

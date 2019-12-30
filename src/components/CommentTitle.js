import React, { useState } from 'react'
import styled from 'styled-components'

export function CommentTitle({ count, onOrder }) {
  const [option, setOption] = useState('default')
  return (
    <StyledTitle>
      <h2 data-testid="comment-title">{count !== 0 && count + ' '}Comments</h2>
      <select
        data-testid="order-comment"
        value={option}
        onChange={event => {
          setOption(event.target.value)
          onOrder(event.target.value)
        }}
      >
        <option value="default">SORT BY</option>
        <option value="newFirst">New To Old</option>
        <option value="oldFirst">Old to New</option>
      </select>
    </StyledTitle>
  )
}

const StyledTitle = styled.div`
  display: flex;
  align-items: baseline;

  select {
    margin-left: 10px;
  }
`

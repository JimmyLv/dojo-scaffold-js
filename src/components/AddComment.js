import React, { useState } from 'react'
import styled from 'styled-components'

export function AddComment({ onAdd }) {
  const [comment, setComment] = useState('')

  function handleComment() {
    onAdd(comment)
    setComment('')
  }

  function handleCancel() {
    setComment('')
  }

  function handleChange(e) {
    setComment(e.target.value)
  }

  return (
    <StyledAddComment>
      <input
        type="text"
        placeholder="Add a public comment..."
        value={comment}
        onChange={handleChange}
      />
      {comment && (
        <StyledButtonGroup>
          <button data-testid="cancel-comment-button" onClick={handleCancel}>
            CANCEL
          </button>
          <button data-testid="add-comment-button" onClick={handleComment}>
            COMMENT
          </button>
        </StyledButtonGroup>
      )}
    </StyledAddComment>
  )
}

const StyledAddComment = styled.div`
  input {
    width: 100%;
  }
`

const StyledButtonGroup = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  margin-top: 10px;
`

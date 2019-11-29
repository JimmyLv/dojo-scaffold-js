import { Button, Input } from 'antd'
import React, { useState } from 'react'
import styled from 'styled-components'

export function AddComment({ onSave }) {
  const [comment, setComment] = useState('')
  const [showButton, setShowButton] = useState(false)

  function addNewComment() {
    onSave(comment)
    setComment('')
    setShowButton(false)
  }

  return (
    <StyledBox>
      <Input
        type="text"
        placeholder="请输入新留言…"
        value={comment}
        onChange={e => setComment(e.target.value)}
        onClick={() => setShowButton(true)}
        onPressEnter={addNewComment}
      />
      {showButton && (
        <div>
          <Button
            data-testid="cancel-comment"
            onClick={() => setShowButton(false)}
          >
            取消
          </Button>
          <Button
            data-testid="reply-comment"
            type="primary"
            onClick={addNewComment}
          >
            回复
          </Button>
        </div>
      )}
    </StyledBox>
  )
}

const StyledBox = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  input {
    width: 80%;
  }
`

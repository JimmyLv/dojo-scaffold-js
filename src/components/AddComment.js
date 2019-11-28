import React, { useState } from 'react'

export function AddComment({ onSave }) {
  const [comment, setComment] = useState('')
  return (
    <>
      <input
        type="text"
        placeholder="请输入新留言…"
        value={comment}
        onChange={e => setComment(e.target.value)}
      />
      <button
        data-testid="save-comment"
        onClick={() => {
          onSave(comment)
          setComment('')
        }}
      >
        回复
      </button>
    </>
  )
}

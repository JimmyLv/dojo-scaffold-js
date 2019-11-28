// @ts-nocheck
import React, { useState } from 'react'
import { AddComment } from './AddComment'
import { CommentList } from './CommentList'

function CommentsTitle({ count }) {
  return (
    <h2 data-testid="comment-title">
      {count === 0 ? '留言框' : `${count} 留言`}
    </h2>
  )
}

export function Comment() {
  const [comments, setComments] = useState([])
  return (
    <div>
      <CommentsTitle count={comments.length} />
      <AddComment onSave={comment => setComments([...comments, comment])} />
      <CommentList comments={comments} />
    </div>
  )
}

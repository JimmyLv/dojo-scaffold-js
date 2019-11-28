import React from 'react'

export function CommentList({ comments }) {
  if (!comments || !comments.length) return <div>暂无留言</div>

  return comments.map(comment => (
    <div key={comment} data-testid="comment-content">
      {comment}
    </div>
  ))
}

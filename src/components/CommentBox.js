import React, { useState } from 'react'
import { AddComment } from './AddComment'
import { CommentList } from './CommentList'
import { CommentTitle } from './CommentTitle'

export function CommentBox() {
  const [comments, setComments] = useState([])
  const [orderType, setOrderType] = useState('default')

  // @ts-ignore
  const handleAdd = comment => setComments([comment, ...comments])
  const orderedComments =
    orderType === 'oldFirst' ? [...comments].reverse() : comments
  return (
    <div>
      <CommentTitle count={comments.length} onOrder={setOrderType} />
      <AddComment onAdd={handleAdd} />
      <CommentList comments={orderedComments} />
    </div>
  )
}

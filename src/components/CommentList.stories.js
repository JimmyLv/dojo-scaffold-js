import React from 'react'
import { CommentList } from './CommentList'

export default {
  title: 'CommentList',
}

export function commentList() {
  return <CommentList comments={['text1', 'text2']} />
}

export function emptyComment() {
  return <CommentList comments={[]} />
}

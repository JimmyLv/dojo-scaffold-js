import React from 'react'
import { CommentTitle } from './CommentTitle'

export default {
  title: 'CommentTitle',
}

export function orderComments(orderHandler) {
  return <CommentTitle onOrder={orderHandler} count={2} />
}

export function emptyComments() {
  return <CommentTitle count={0} />
}

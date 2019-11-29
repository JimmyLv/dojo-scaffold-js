import { List } from 'antd'
import React from 'react'
import { isEmpty } from 'lodash'
import { Empty } from 'antd'

export function CommentList({ comments, sortType }) {
  if (isEmpty(comments)) {
    return <Empty description="留言为空" />
  }

  return (
    <List
      dataSource={sortType === 'oldest' ? comments : [...comments].reverse()}
      renderItem={item => (
        <div data-testid="comment-content" key={item}>
          {item}
        </div>
      )}
    />
  )
}

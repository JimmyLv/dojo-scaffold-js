import { Row, Select } from 'antd'
import React from 'react'

export function CommentTitle({ comments, onSort }) {
  return (
    <Row type="flex">
      <h2 data-testid="comment-title">
        {!comments || comments.length === 0
          ? '留言板'
          : `${comments.length} 留言`}
      </h2>
      <Select
        style={{ width: 100 }}
        data-testid="sort-comment"
        defaultValue={['latest']}
        onChange={value => onSort(value)}
      >
        <Select.Option value="latest">默认</Select.Option>
        <Select.Option value="oldest">从旧到新</Select.Option>
      </Select>
    </Row>
  )
}

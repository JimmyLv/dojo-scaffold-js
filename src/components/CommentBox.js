// @ts-nocheck
import React, { useState } from 'react'
import styled from 'styled-components'
import { AddComment } from './AddComment'
import { CommentList } from './CommentList'
import { CommentTitle } from './CommentTitle'

export function CommentBox() {
  const [comments, setComments] = useState([])
  const [sortType, setSortType] = useState('latest')
  return (
    <StyledBox>
      <CommentTitle comments={comments} onSort={type => setSortType(type)} />

      <AddComment onSave={comment => setComments([...comments, comment])} />

      <CommentList comments={comments} sortType={sortType} />
    </StyledBox>
  )
}

const StyledBox = styled.div`
  margin: 20px;
`

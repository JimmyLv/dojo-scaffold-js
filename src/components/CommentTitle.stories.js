import { action } from '@storybook/addon-actions'
import React from 'react'
import { CommentTitle } from './CommentTitle'

export default {
  title: 'CommentTitle',
}

export const add = () => <CommentTitle onSort={action('sortHandler')} />

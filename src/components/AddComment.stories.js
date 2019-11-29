import { action } from '@storybook/addon-actions'
import React from 'react'
import { AddComment } from './AddComment'

export default {
  title: 'AddComment',
}

export const add = () => <AddComment onSave={action('saveHandler')} />

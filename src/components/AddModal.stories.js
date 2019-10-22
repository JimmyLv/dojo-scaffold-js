import { action } from '@storybook/addon-actions'
import React from 'react'

import AddModal from './AddModal'

export default {
  title: 'AddModal',
}

export const modal = () => (
  <AddModal
    onAddProduct={action('handleAdd')}
    toggleModal={action('toggleAddModal')}
  />
)

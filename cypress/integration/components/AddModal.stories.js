import { action } from '@storybook/addon-actions'
import React from 'react'
import AddModal from '../../../src/components/AddModal'

export default {
  title: 'AddModal',
}

export const modal = (_, act = action) => (
  <AddModal
    onAddProduct={act('handleAdd')}
    toggleModal={act('toggleAddModal')}
  />
)

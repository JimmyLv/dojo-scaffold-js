import { action } from '@storybook/addon-actions'
import React from 'react'
import AddModal from '../../../src/components/AddModal'
import act from '../common/action'

export default {
  title: 'AddModal',
}

export const modal = () => (
  <AddModal
    onAddProduct={act('handleAdd')}
    toggleModal={act('toggleAddModal')}
  />
)

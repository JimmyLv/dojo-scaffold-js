import { action } from '@storybook/addon-actions'
import React from 'react'
import { FilterInfo } from '../../../src/components/FilterInfo'

export default {
  title: 'FilterInfo',
}

export const filters = (_, act = action) => (
  <FilterInfo
    filters={['All', 'Active', 'Completed']}
    dispatch={act('dispatch')}
  />
)

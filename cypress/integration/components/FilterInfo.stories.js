import React from 'react'
import { FilterInfo } from '../../../src/components/FilterInfo'
import act from '../common/action'

export default {
  title: 'FilterInfo',
}

export const filters = () => (
  <FilterInfo
    filters={['All', 'Active', 'Completed']}
    dispatch={act('dispatch')}
  />
)

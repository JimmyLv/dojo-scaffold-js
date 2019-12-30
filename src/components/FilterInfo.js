import React from 'react'
import { connect } from 'react-redux'
import { actions } from '../store/filter'

export function FilterInfo({ filters = [], dispatch }) {
  return (
    <div>
      {filters.map(status => (
        <span key={status}>
          <a
            href={`#${status}`}
            onClick={() => dispatch(actions.setFilterStatus(status))}
          >
            {status}
          </a>{' '}
        </span>
      ))}
    </div>
  )
}

export default connect()(FilterInfo)

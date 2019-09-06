import React from 'react'

export default function FilterInfo({ filters = []}) {
  return <div>
    {filters.map(filter =>
      <span key={filter}><a href={`#${filter}`}>{filter}</a> </span>
    )}
  </div>
}

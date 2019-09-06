import React from 'react'

export default function FilterInfo({ filters = []}) {
  return <div>
    {filters.map(filter => <span>{filter} </span>)}
  </div>
}

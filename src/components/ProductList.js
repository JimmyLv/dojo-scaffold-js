import React from 'react'

export default function ProductList({ products }) {
  return (
    <div>
      {products.map(item => (
        <div data-testid="productCode" key={item}>
          {item}
        </div>
      ))}
    </div>
  )
}

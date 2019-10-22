import React from 'react'
import styled from 'styled-components'

export default function ProductList({ products }) {
  return (
    <div>
      {products.map(item => (
        <ProductItem data-testid="productCode" key={item.code}>
          <span>{item.code}</span>
          <span>{item.price}</span>
          <span>{item.count}</span>
        </ProductItem>
      ))}
    </div>
  )
}

const ProductItem = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
`

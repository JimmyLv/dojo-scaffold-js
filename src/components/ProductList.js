import React from 'react'
import styled from 'styled-components'
import Counter from './Counter'

export default function ProductList({ products, onProductChange }) {
  const onIncrease = product =>
    onProductChange({
      ...product,
      count: product.count + 1,
    })
  const onDecrease = product =>
    onProductChange({
      ...product,
      count: product.count > 1 ? product.count - 1 : 1,
    })
  return (
    <div>
      {products.map(item => (
        <ProductItem data-testid="productCode" key={item.code}>
          <span>{item.code}</span>
          <span>{item.price}</span>
          <Counter
            product={item}
            onDecrease={onDecrease}
            onIncrease={onIncrease}
          />
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

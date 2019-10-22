import React, { Component } from 'react'
import styled from 'styled-components'

export default class Counter extends Component {
  render() {
    const { product, onDecrease, onIncrease } = this.props
    return (
      <Group>
        <button data-testid="decreaseCount" onClick={() => onDecrease(product)}>
          -
        </button>
        <span data-testid="productCount">{product.count}</span>
        <button data-testid="increaseCount" onClick={() => onIncrease(product)}>
          +
        </button>
      </Group>
    )
  }
}

const Group = styled.div`
  display: flex;
  align-items: center;
  min-width: 80px;
  justify-content: space-between;
`

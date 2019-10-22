import React, { Component } from 'react'

export default class Counter extends Component {
  render() {
    const { product, onDecrease, onIncrease } = this.props
    return (
      <div>
        <button data-testid="decreaseCount" onClick={() => onDecrease(product)}>
          -
        </button>
        <span data-testid="productCount">{product.count}</span>
        <button data-testid="increaseCount" onClick={() => onIncrease(product)}>
          +
        </button>
      </div>
    )
  }
}

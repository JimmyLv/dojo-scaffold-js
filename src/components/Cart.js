import React, { Component } from 'react'
import AddProduct from './AddProduct'
import ProductList from './ProductList'

export default class Cart extends Component {
  state = {
    products: [],
  }
  handleAddProduct = newProduct => {
    this.setState(state => ({
      products: [...state.products, newProduct],
    }))
  }

  render() {
    const { products } = this.state
    return (
      <>
        <h1>React Shopping Cart</h1>
        <AddProduct onAddProduct={this.handleAddProduct} />
        <ProductList products={products} />
      </>
    )
  }
}

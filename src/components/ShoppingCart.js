import React, { Component } from 'react'
import AddProduct from './AddProduct'
import ProductList from './ProductList'

export default class ShoppingCart extends Component {
  state = {
    products: [],
  }
  render() {
    const { products } = this.state
    return (
      <>
        <h1>React Shopping Cart</h1>
        <div data-testid="totalPrice">
          ￥{ShoppingCart.totalPrice(products)}
        </div>
        <AddProduct onAddProduct={this.handleAddProduct} />
        <ProductList
          products={products}
          onProductChange={this.handleProductChange}
        />
      </>
    )
  }

  handleProductChange = productToChange => {
    this.setState(state => ({
      products: state.products.map(item =>
        item.code === productToChange.code ? productToChange : item
      ),
    }))
  }

  handleAddProduct = newProduct => {
    const { products } = this.state

    if (products.some(({ code }) => code === newProduct.code)) {
      this.setState(state => ({
        products: state.products.map(item => ({
          ...item,
          count: item.code === newProduct.code ? item.count + 1 : item.count,
        })),
      }))
    } else {
      this.setState(state => ({
        products: [...state.products, newProduct],
      }))
    }
  }

  static totalPrice(products) {
    return products.reduce((prev, item) => prev + item.price * item.count, 0)
  }
}

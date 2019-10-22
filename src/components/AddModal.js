import React, { Component } from 'react'
import styled from 'styled-components'

export default class AddModal extends Component {
  state = {
    newProduct: '',
  }

  render() {
    const { newProduct } = this.state
    const { toggleModal } = this.props
    return (
      <>
        <Background data-testid="modalBackground" onClick={toggleModal} />
        <Content>
          <h2>Add new Product...</h2>
          <input
            type="text"
            data-testid="newProductCode"
            value={newProduct}
            onChange={this.handleChange}
          />
          <button data-testid="addProduct" onClick={this.handleAdd}>
            Save
          </button>
        </Content>
      </>
    )
  }

  handleChange = e => {
    this.setState({
      newProduct: e.target.value,
    })
  }
  handleAdd = () => {
    const { newProduct } = this.state
    const { onAddProduct } = this.props
    onAddProduct(newProduct)
    this.setState({
      newProduct: '',
    })
  }
}

const Background = styled.div`
  position: fixed;
  left: 0;
  top: 0;
  right: 0;
  bottom: 0;
  z-index: 2;
  background-color: rgba(0, 0, 0, 0.6);
`
const Content = styled.div`
  position: fixed;
  background-color: #fff;
  left: 0;
  right: 0;
  bottom: 0;
  padding: 10px;
  z-index: 10;
  animation: fadeUp 0.4s ease both;
`

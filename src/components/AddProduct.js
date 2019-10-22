import React, { Component } from 'react'
import AddModal from './AddModal'

export default class AddProduct extends Component {
  state = { showAddModal: false }

  render() {
    const { showAddModal } = this.state
    return (
      <div>
        <div style={{ display: showAddModal ? 'block' : 'none' }}>
          <AddModal
            onAddProduct={this.handleAdd}
            toggleModal={this.toggleAddModal}
          />
        </div>
        <button data-testid="newProduct" onClick={this.toggleAddModal}>
          New Product
        </button>
      </div>
    )
  }

  handleAdd = productCode => {
    const { onAddProduct } = this.props

    onAddProduct({
      code: productCode,
      price: 100,
      count: 1,
    })
  }

  toggleAddModal = () => {
    this.setState(state => ({
      showAddModal: !state.showAddModal,
    }))
  }
}

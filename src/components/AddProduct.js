import React, { Component } from 'react'
import AddModal from './AddModal'

export default class AddProduct extends Component {
  state = { showAddModal: false }
  handleAdd = product => {
    const { onAddProduct } = this.props

    this.toggleAddModal()
    onAddProduct(product)
  }

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

  toggleAddModal = () => {
    this.setState(state => ({
      showAddModal: !state.showAddModal,
    }))
  }
}

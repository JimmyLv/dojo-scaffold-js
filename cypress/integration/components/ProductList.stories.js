import React from 'react'
import ProductList from '../../../src/components/ProductList'
import act from '../common/action'

export default {
  title: 'ProductList',
}

export const list = () => (
  <ProductList
    products={[generate('ITEM001'), generate('ITEM002')]}
    onProductChange={act('handleProductChange')}
  />
)

function generate(code) {
  return {
    code: code,
    price: 100,
    count: 2,
  }
}

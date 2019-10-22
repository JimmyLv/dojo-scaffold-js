import { action } from '@storybook/addon-actions'
import React from 'react'

import ProductList from '../../../src/components/ProductList'

export default {
  title: 'ProductList',
}

export const list = (_, act = action) => (
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

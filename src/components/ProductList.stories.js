import { action } from '@storybook/addon-actions'
import React from 'react'

import ProductList from './ProductList'

export default {
  title: 'ProductList',
}

export const list = () => (
  <ProductList
    products={[
      { code: 'ITEM001', price: 100, count: 2 },
      // { code: 'ITEM002', price: 100, count: 1 },
    ]}
    onProductChange={action('handleProductChange')}
  />
)

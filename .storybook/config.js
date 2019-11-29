import { addDecorator, configure } from '@storybook/react'
import React from 'react'
import { Provider } from 'react-redux'
import requireContext from 'require-context.macro'
import store from '../src/store'
import 'antd/dist/antd.css'

// automatically import all files ending in *.stories.js
configure(
  requireContext('../cypress/integration/components', true, /\.stories\.js$/),
  module
)
configure(
  requireContext('../src/components', true, /\.stories\.js$/),
  module
)

addDecorator(story => <Provider store={store}>{story()}</Provider>)

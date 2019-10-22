import { addDecorator, configure } from '@storybook/react'
import { setupApp } from '../src'

// automatically import all files ending in *.stories.js
configure(
  require.context('../cypress/integration/components', true, /\.stories\.js$/),
  module
)

addDecorator(story => setupApp(story()))

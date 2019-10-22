import { action } from '@storybook/addon-actions'

let act
if (typeof Cypress !== 'undefined') {
  act = name => cy.spy().as(name)
} else {
  act = action
}

export default act

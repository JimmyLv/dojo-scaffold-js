// ***********************************************************
// This example support/index.js is processed and
// loaded automatically before your test files.
//
// This is a great place to put global configuration and
// behavior that modifies Cypress.
//
// You can change the location of this file or turn off
// automatically serving support files with the
// 'supportFile' configuration option.
//
// You can read more here:
// https://on.cypress.io/configuration
// ***********************************************************

import 'cypress-jest-adapter'
import 'cypress-plugin-snapshots/commands'

import 'cypress-react-unit-test'
import * as ReactDOM from 'react-dom'
import './commands'

// Import commands.js using ES2015 syntax:
// import 'cypress-skip-and-only-ui/support'
// import '@cypress/code-coverage/support'

// Alternatively you can use CommonJS syntax:
// require('./commands')

// Fixes incorrect React version
// https://github.com/bahmutov/cypress-react-unit-test/issues/51
Cypress.on('window:load', win => {
  win.ReactDOM = window.ReactDOM || win.ReactDOM
})

export function fixReactDomScope(win) {
  if (win.ReactDOM !== ReactDOM) {
    win.ReactDOM = ReactDOM
  }
}

export const fixCypressSpec = (filename, window) => () => {
  fixReactDomScope(window)
  const path = require('path')
  const relative = filename.substr(1) // removes leading "/"
  const projectRoot = Cypress.config('projectRoot')
  const absolute = path.join(projectRoot, relative)
  Cypress.spec = {
    absolute,
    name: path.basename(filename),
    relative,
  }
}

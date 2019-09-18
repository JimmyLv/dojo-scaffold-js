// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add("login", (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add("drag", { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add("dismiss", { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This is will overwrite an existing command --
// Cypress.Commands.overwrite("visit", (originalFn, url, options) => { ... })
import React from 'react'
import { Provider } from 'react-redux'
import configureMockStore from 'redux-mock-store'

// this is a handy function that I normally make available for all my tests
// that deal with connected components.
// you can provide initialState or the entire store that the ui is rendered with
const mockStore = configureMockStore()

Cypress.Commands.add('mountWithRedux', (
  ui,
  data = {},
) => {
  const { initialState, store = mockStore(initialState) } = data
  cy.spy(store, 'dispatch').as('dispatch')
  cy.mount(<Provider store={store}>{ui}</Provider>)
})

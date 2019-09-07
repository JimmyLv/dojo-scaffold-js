import { Given, Then } from 'cypress-cucumber-preprocessor/steps'

Given('I open {string} page', (url) => {
  cy.visit(url)
})

Then(`I see {string} in the title`, (title) => {
  cy.title().should('include', title)
})

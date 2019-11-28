declare namespace Cypress {
  interface Chainable {
    mountWithRedux: (component: Symbol, alias?: string) => Chainable<void>
  }
}

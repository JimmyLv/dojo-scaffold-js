describe('Storybook Components', () => {
  beforeEach(() => {
    cy.visit('http://localhost:9009')
  })
  describe('<ProductList />', () => {
    it('should iterate through all components', () => {
      cy.get('a[title="ProductList"]').click()
      cy.get('#storybook-preview-iframe').then($iframe => {
        const doc = $iframe.contents()
        igetByTestId(doc, 'increaseCount').click()
        igetByTestId(doc, 'productCount').should('have.text', '2')

        cy.wrap(doc).toMatchImageSnapshot()
      })
    })
  })
  describe('<AddModal />', () => {
    it('should iterate through all components', () => {
      cy.get('a[title="AddModal"]').click({ force: true })
      cy.get('#storybook-preview-iframe').then($iframe => {
        const doc = $iframe.contents()
        igetByTestId(doc, 'newProductCode').type('ITEM001')
        igetByTestId(doc, 'addProduct').click()

        cy.wrap(doc).toMatchImageSnapshot()
      })
    })
  })
  function iget(doc, selector) {
    return cy.wrap(doc.find(selector))
  }
  function igetByTestId(doc, testId) {
    return iget(doc, `[data-testid="${testId}"]`)
  }
})

describe('ShoppingCart', () => {
  beforeEach(() => {
    cy.visit('/')
    addProduct('ITEM001')
  })
  it('should show cart title', () => {
    cy.contains('React Shopping Cart')
  })

  it('should add new product item into cart', () => {
    cy.queryAllByTestId('productCode').should('contain', 'ITEM001')
  })
  it('should calculate total price given product list', () => {
    cy.queryByTestId('totalPrice').should('have.text', '￥100')
    addProduct('ITEM002')
    cy.queryByTestId('totalPrice').should('have.text', '￥200')
  })

  it('should only increase product count when add same product code', () => {
    addProduct('ITEM002')
    addProduct('ITEM002')
    cy.queryAllByTestId('productCode').should('have.length', 2)
    getField('ITEM002', 'productCount').should('have.text', '2')
  })
  it('should increase and decrease product count when click counter', () => {
    getField('ITEM001', 'increaseCount').click()
    getField('ITEM001', 'productCount').should('have.text', '2')
    getField('ITEM001', 'decreaseCount').click()
    getField('ITEM001', 'productCount').should('have.text', '1')
  })
  function getField(code, testId) {
    return cy
      .contains(code)
      .siblings()
      .children(`[data-testid="${testId}"]`)
  }
  function addProduct(code) {
    cy.queryByTestId('newProduct').click()
    cy.queryByTestId('newProductCode').type(code)
    cy.queryByTestId('addProduct').click()
  }
})

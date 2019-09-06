import filter from './filter'

it('should set filter status in store', () => {
  const action = { type: 'filter/SET_FILTER', payload: { status: 'Completed' } }
  const result = filter.reducer(undefined, action)
  expect(result).toBe('Completed')
})

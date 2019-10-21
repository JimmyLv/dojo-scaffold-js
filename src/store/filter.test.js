import reducer, { actions } from './filter'

it('should set filter status in store', () => {
  const action = actions.setFilterStatus('Completed')

  const result = reducer(undefined, action)

  expect(result).toBe('Completed')
})

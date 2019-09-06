import { actions } from '../../src/store/actions'

describe('actions', () => {
  describe('add', () => {
    it('adds an item', () => {
      const state = {
        input: 'foo',
        todos: [],
      }
      const result = actions.add()(state)
      expect(result).toEqual({
        input: '',
        todos: [{
          done: false,
          id: 1,
          value: 'foo',
        }],
      })
    })
  })
})

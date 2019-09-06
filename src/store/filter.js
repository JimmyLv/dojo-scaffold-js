export const NAME = 'filter'
export const types = {
  FILTER: `${NAME}/SET_FILTER`,
}

export default {
  namespace: NAME,
  actions: {
    setFilterStatus: status => ({
      type: types.FILTER,
      payload: { status },
    }),
  },
  reducer(state = 'All', action) {
    const { type, payload } = action
    switch (type) {
      case types.FILTER:
        return payload.status
      default:
        return state
    }
  },
  selectors: {},
}

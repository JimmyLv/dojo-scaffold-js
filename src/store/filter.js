export const NAME = 'filter'
export const types = {
  FILTER: `${NAME}/SET_FILTER`,
}
export const actions = {
  setFilterStatus: status => ({
    type: types.FILTER,
    payload: { status },
  }),
}

export default function reducer(state = 'All', action) {
  const { type, payload } = action
  switch (type) {
    case types.FILTER:
      return payload.status
    default:
      return state
  }
}

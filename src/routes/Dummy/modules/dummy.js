// ------------------------------------
// Constants
// ------------------------------------
export const SET_ACTIVE_BLOCK = 'SET_ACTIVE_BLOCK'

// ------------------------------------
// Actions
// ------------------------------------

// ------------------------------------
// Action Handlers
// ------------------------------------
const ACTION_HANDLERS = {
  [SET_ACTIVE_BLOCK]    : (state, action) => {
    return { ...state, activeBlock: action.payload }
  }
}

// ------------------------------------
// Reducer
// ------------------------------------
const initialState = {
  dummyText: 'default value',
  dummyVal: false,
  activeBlock: 1
}
export default function dummyReducer (state = initialState, action) {
  const handler = ACTION_HANDLERS[action.type]

  return handler ? handler(state, action) : state
}

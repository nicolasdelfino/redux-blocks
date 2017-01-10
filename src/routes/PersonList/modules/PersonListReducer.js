// Constants

export const FETCH_USERS = 'FETCH_USERS'
export const FETCH_USERS_FULLFILLED = 'FETCH_USERS_FULLFILLED'
export const FETCH_USERS_REJECTED = 'FETCH_USERS_REJECTED'
export const CLEAR_USERS = 'CLEAR_USERS'

// saga example
export const SAGA_FETCH_ALBUMS = 'SAGA_FETCH_ALBUMS'
export const SAGA_FETCH_ALBUMS_FULLFILLED = 'SAGA_FETCH_ALBUMS_FULLFILLED'
export const SAGA_CLEAR_ALBUMS = 'SAGA_CLEAR_USERS'

// Actions
// personlist thunk
export const personListAsync = () => {
  return (dispatch, getState) => {
    dispatch({ type: FETCH_USERS })
    fetch('http://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then(json => {
      dispatch({ type: FETCH_USERS_FULLFILLED, payload: json })
    })
    .catch(error => {
      dispatch({ type: FETCH_USERS_REJECTED, payload: error })
      console.log(error)
    })
  }
}

export const clearList = () => {
  return (dispatch, getState) => {
    dispatch({ type: CLEAR_USERS })
  }
}

export const clearAlbumList = () => {
  return (dispatch, getState) => {
    dispatch({ type: SAGA_CLEAR_ALBUMS })
  }
}

export const runSagaFetch = () => {
  return (dispatch, getState) => {
    dispatch({ type: SAGA_FETCH_ALBUMS })
  }
}

export const actions = {
  personListAsync,
  clearList,
  runSagaFetch
}

// Action Handlers

const ACTION_HANDLERS = {
  [FETCH_USERS] : (state, action) => {
    return { ...state, fetching: true }
  },
  [FETCH_USERS_FULLFILLED] : (state, action) => {
    return { ...state, fetching: false, fetched: true, users: action.payload }
  },
  [FETCH_USERS_REJECTED] :  (state, action) => {
    return { ...state, fetching: false, error: action.payload }
  },
  [CLEAR_USERS] : (state, action) => {
    return { ...state, users: null }
  },
  [SAGA_FETCH_ALBUMS_FULLFILLED] : (state, action) => {
    return { ...state, albums: action.payload }
  },
  [SAGA_CLEAR_ALBUMS] : (state, action) => {
    return { ...state, albums: null }
  }
}

// reducer

const initialState = {
  users: [],
  fetching: false,
  fetched: false,
  error: null,
  albums: []
}

export default function PersonListReducer (state = initialState, action) {
  const handler = ACTION_HANDLERS[action.type]

  return handler ? handler(state, action) : state
}

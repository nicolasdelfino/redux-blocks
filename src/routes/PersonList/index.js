import { injectReducer } from '../../store/reducers'

export default (store) => ({
  path: 'apis',
  getComponent (nextState, cb) {
    require.ensure([], (require) => {
      const PersonListContainer = require('./containers/PersonListContainer').default
      const reducer = require('./modules/PersonListReducer').default

      injectReducer(store, { key: 'personlist', reducer })

      cb(null, PersonListContainer)
    }, 'personlist')
  }
})

import { combineReducers } from 'redux'
import { routerReducer } from 'react-router-redux'
import rangeSilderReducer from '../containers/Filters/Range/RangeFilterReducer'

export default combineReducers({
  router: routerReducer,
  slider: rangeSilderReducer
})

import { combineReducers } from 'redux'
import { routerReducer } from 'react-router-redux'
import rangeSilderReducer from '../containers/Filters/Range/RangeFilterReducer'
import multipleChoicesReducer from '../containers/Filters/MultipleChoices/MultipleChoicesReducer'

export default combineReducers({
  router: routerReducer,
  slider: rangeSilderReducer,
  multiple: multipleChoicesReducer
})

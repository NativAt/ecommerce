import { combineReducers } from 'redux'
import { routerReducer } from 'react-router-redux'
import rangeSilderReducer from '../containers/Filters/Range/RangeFilterReducer'
import multipleChoicesReducer from '../containers/Filters/MultipleChoices/MultipleChoicesReducer'
import radioButton from '../containers/Filters/RadioButton/RadioButtonReducer'

export default combineReducers({
  router: routerReducer,
  slider: rangeSilderReducer,
  multiple: multipleChoicesReducer,
  radio: radioButton
})

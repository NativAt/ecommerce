import { combineReducers } from 'redux'
import { routerReducer } from 'react-router-redux'
import rangeSilderReducer from '../containers/Filters/Range/RangeFilterReducer'
import multipleChoicesReducer from '../containers/Filters/MultipleChoices/MultipleChoicesReducer'
import radioButtonReducer from '../containers/Filters/RadioButton/RadioButtonReducer'
import flightsReducer from '../containers/Flights/FlightsReducer'

export default combineReducers({
  router: routerReducer,
  slider: rangeSilderReducer,
  multiple: multipleChoicesReducer,
  radio: radioButtonReducer,
  flights: flightsReducer
})

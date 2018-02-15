import {
  RADIO_CHANGE,
  INIT_RADIO_FILTERS,
} from './RadioButtonTypes';


const initialState = {
}

export default (state = {}, action) => {
  switch (action.type) {
    case RADIO_CHANGE:
      const key = Object.keys(action.payload);
      return {
        ...state,
        [key]: action.payload[key],
      }

    case INIT_RADIO_FILTERS:
      return action.payload
        
      default:
        return state
  }
}
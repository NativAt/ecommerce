import {
  SELECT_CHANGE,
  INIT_FILTERS,
} from './RadioButtonTypes';


const initialState = {
  filters: []
}

export default (state = initialState, action) => {
  switch (action.type) {
    case SELECT_CHANGE:
      const key = Object.keys(action.payload);
      return {
        [key]: action.payload[key]
      }

    case INIT_FILTERS:
      return {
        ...state,
        filters: action.payload
      }  

      default:
        return state
  }
}
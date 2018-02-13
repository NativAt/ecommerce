import {
  RADIO_CHANGE,
  INIT_RADIO_FILTERS,
} from './RadioButtonTypes';


const initialState = {
  filters: []
}

export default (state = initialState, action) => {
  switch (action.type) {
    case RADIO_CHANGE:
      const key = Object.keys(action.payload);
      state.filters[key] = action.payload[key];
      return {
        ...state,
      }

    case INIT_RADIO_FILTERS:
      return {
        ...state,
        filters: action.payload
      }  

      default:
        return state
  }
}
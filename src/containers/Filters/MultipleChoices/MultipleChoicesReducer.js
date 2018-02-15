import {
  SELECT_CHANGE,
  INIT_FILTERS,
} from './MultipleChoicesTypes';


const initialState = {
}

export default (state = {}, action) => {
  switch (action.type) {
    case SELECT_CHANGE:
      const key = Object.keys(action.payload);
      return {
        ...state,
        [key]: action.payload[key]
      }

    case INIT_FILTERS:
      return action.payload
       
      default:
        return state
  }
}
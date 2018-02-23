import {
  SELECT_CHANGE,
  CHECKBOX_INIT,
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

    case CHECKBOX_INIT:
      return action.payload
       
      default:
        return state
  }
}
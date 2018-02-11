import {
  SELECT_CHANGE,
} from './MultipleChoicesTypes';

const initialState = {
  value: false
}

export default (state = [], action) => {
  console.log(action.payload);
  switch (action.type) {
    case SELECT_CHANGE:
      const key = Object.keys(action.payload);
      return {
        ...state,
        [key]: action.payload[key]
      }
      
      default:
        return state
  }
}
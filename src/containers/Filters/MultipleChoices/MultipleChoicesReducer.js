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
      return [
        ...state,
       Object.keys(action.payload)
      ]

      default:
        return state
  }
}
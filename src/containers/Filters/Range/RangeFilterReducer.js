import {
  SLIDER_CHANGE,
} from './RangeFilterTypes';

const initialState = {
  value: 0,
  max_range: 100,
  min_range: 0,
}

export default (state = initialState, action) => {
  switch (action.type) {

    case SLIDER_CHANGE:
      return {
        ...state,
        value: action.payload,
      }

    default:
      return state
  }
}
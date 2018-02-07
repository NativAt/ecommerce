export const MAX_RANGE = 'max_range'
export const MIN_RANGE = 'min_range'
export const INCREMENT = 'increment';
export const DECREMENT = 'decrement';

const initialState = {
  range: 0,
  isIncrementing: false,
  isDecrementing: false
}

export default (state = initialState, action) => {
  switch (action.type) {
    case INCREMENT:
      return {
        ...state,
        count: state.count + 1,
        isIncrementing: !state.isIncrementing
      }

    case DECREMENT:
      return {
        ...state,
        count: state.count - 1,
        isDecrementing: !state.isDecrementing
      }

    default:
      return state
  }
}
import {
  SLIDER_INIT,
  SLIDER_CHANGE,
} from './RangeFilterTypes';


export const sliderChange = (value) => {
  return dispatch => {
    dispatch({
      type: SLIDER_CHANGE,
      payload: value
    })
  }
}

export const sliderInit = (minRange, maxRange) => {
  return dispatch => {
    dispatch({
      type: SLIDER_INIT,
      payload: { 
        minRange,
        maxRange
      }
    })
  }
}
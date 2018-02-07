import {
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
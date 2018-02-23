import {
  SELECT_CHANGE,
  CHECKBOX_INIT,
} from './MultipleChoicesTypes'


export const selectChange = (name, value) => {
  return dispatch => {
    dispatch({
      type: SELECT_CHANGE,
      payload: { [name]: value }
    })
  }
}

export const checkboxInit = (checkbox) => {
  return dispatch => {
    dispatch({
      type: CHECKBOX_INIT,
      payload: checkbox,
    })
  }
}
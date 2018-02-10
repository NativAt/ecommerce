import {
  SELECT_CHANGE,
} from './MultipleChoicesTypes'


export const selectChange = (name, value) => {
  return dispatch => {
    dispatch({
      type: SELECT_CHANGE,
      payload: { [name]: value }
    })
  }
}